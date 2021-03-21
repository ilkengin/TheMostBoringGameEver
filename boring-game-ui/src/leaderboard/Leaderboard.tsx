import { List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import './Leaderboard.css';

type LeaderboardProps = {
  loading: boolean,
  users: any[],
  error: any
}

export default class Leaderboard extends React.Component<{}, LeaderboardProps> {
  constructor(props: LeaderboardProps) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      users: []
    };
  }

  componentDidMount() {
    this.getUserList();
  }

  render() {
    const { loading, users, error } = this.state;
    return (
      <div>
        {
          users.length > 0 && users.map(user => (
            <List aria-label="leaderboard list">
              <ListItem button>
                <ListItemText primary="Trash" />
              </ListItem>
            </List>
            ))
        }
        { error && <div>Sorry, can not display the data</div>}
      </div>);
  }

  private getUserList = async () => {
    try { //try to get data
        const response = await fetch("http://localhost:8080/api/leaderboard/");
        if (response.ok) { // ckeck if status code is 200
          const data = await response.json();
          this.setState({ loading: false, users: data.results});
        } else { 
          this.setState({ loading: false, error: true });
        }
    } catch (e) { //code will jump here if there is a network problem
      this.setState({ loading: false, error: true });
    }
  }
}
