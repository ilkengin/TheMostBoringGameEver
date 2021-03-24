import { Box, List, ListItem, ListItemText, CircularProgress } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import React, { Component } from 'react';
import User from '../models/user.model';
import './Leaderboard.css';

interface LeaderboardProps {
  refresh: boolean;
  leaderboardLoaded?: () => void;
}

type LeaderboardState = {
  users: User[];
  pageCount: number;
  pageSize: number;
  currentPage: number;
  loading: boolean;
  error: boolean;
};

export default class Leaderboard extends Component<LeaderboardProps, LeaderboardState> {
  constructor(props: LeaderboardProps) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      users: [],
      pageCount: 1,
      pageSize: 10,
      currentPage: 0
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount(): void {
    this.getUserScores();
  }

  componentDidUpdate(): void {
    const { refresh } = this.props;
    if (refresh) {
      this.getUserScores();
    }
  }

  private handlePageChange(_e: React.ChangeEvent<unknown>, page: number) {
    this.getUserScores(page - 1);
  }

  private getUserScores(page?: number): void {
    const { leaderboardLoaded } = this.props;
    const { currentPage, pageSize } = this.state;

    const newPage = page ?? currentPage;

    fetch(`/api/v1/scores?page=${newPage}&size=${pageSize}`, {})
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          loading: false,
          users: res.content,
          currentPage: newPage,
          pageCount: res.totalPages
        });
      })
      .catch(() => {
        this.setState({ loading: false, error: true });
      })
      .finally(() => {
        if (leaderboardLoaded) {
          leaderboardLoaded();
        }
      });
  }

  render(): React.ReactNode {
    const { loading, users, error, pageCount, currentPage } = this.state;
    return (
      <Box display="flex" flexDirection="column">
        <Box className="listContainer">
          <List aria-label="leaderboard list">
            {users.map((user) => (
              <ListItem key={user.userId} button>
                <ListItemText primary={user.userId} secondary={user.score} />
              </ListItem>
            ))}
            {error && (
              <ListItem>
                <ListItemText primary="Sorry, can not display the data" />
              </ListItem>
            )}
          </List>
        </Box>
        <Box className="paginationContainer">
          <Pagination
            count={pageCount}
            defaultPage={currentPage + 1}
            onChange={this.handlePageChange}
            shape="rounded"
          />
        </Box>
        {loading && (
          <Box
            className="spinnerContainer"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress />
          </Box>
        )}
      </Box>
    );
  }
}
