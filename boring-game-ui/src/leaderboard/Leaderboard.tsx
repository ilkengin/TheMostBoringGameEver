import { Box, List, ListItem, ListItemText, CircularProgress } from '@material-ui/core';
import React, { Component } from 'react';
import User from '../models/user.model';
import './Leaderboard.css';

interface LeaderboardProps {
  refresh: boolean;
  leaderboardLoaded?: () => void;
}

type LeaderboardState = {
  loading: boolean;
  users: User[];
  error: boolean;
};

export default class Leaderboard extends Component<LeaderboardProps, LeaderboardState> {
  constructor(props: LeaderboardProps) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      users: []
    };
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

  private getUserScores = async () => {
    const { leaderboardLoaded } = this.props;
    fetch('/api/v1/scores/')
      .then((res) => res.json())
      .then((res) => {
        this.setState({ loading: false, users: res.content });
      })
      .catch(() => {
        this.setState({ loading: false, error: true });
      })
      .finally(() => {
        if (leaderboardLoaded) {
          leaderboardLoaded();
        }
      });
  };

  render(): React.ReactNode {
    const { loading, users, error } = this.state;
    return (
      <div>
        <List aria-label="leaderboard list">
          {users.map((user) => (
            <ListItem key={user.userId} button>
              <ListItemText primary={user.userId} secondary={user.score} />
            </ListItem>
          ))}
        </List>
        {error && <div>Sorry, can not display the data</div>}
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
      </div>
    );
  }
}
