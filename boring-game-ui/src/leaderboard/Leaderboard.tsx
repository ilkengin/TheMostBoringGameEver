import { List, ListItem, ListItemText } from '@material-ui/core';
import React, { Component } from 'react';
import User from '../models/user.model';
import './Leaderboard.css';

type LeaderboardState = {
  loading: boolean;
  users: User[];
  error: boolean;
};

export default class Leaderboard extends Component<Record<string, unknown>, LeaderboardState> {
  constructor(props: Record<string, unknown>) {
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

  private getUserScores = async () => {
    fetch('/api/v1/scores/')
      .then((res) => res.json())
      .then((res) => {
        this.setState({ loading: false, users: res.content });
      })
      .catch(() => {
        this.setState({ loading: false, error: true });
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
        {loading && <div>Loading</div>}
      </div>
    );
  }
}
