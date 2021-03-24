import { Button, TextField } from '@material-ui/core';
import React, { Component } from 'react';
import './Playview.css';

interface PlayviewProps {
  onPlay?: () => void;
}

type PlayviewState = {
  userId: string;
  loading: boolean;
  error: boolean;
};

export default class Playview extends Component<PlayviewProps, PlayviewState> {
  constructor(props: PlayviewProps) {
    super(props);
    this.state = {
      userId: '',
      loading: false,
      error: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ userId: event.target.value });
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const { userId } = this.state;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    };
    fetch(`/api/v1/scores/${userId}`, requestOptions)
      .then(() => {
        this.setState({ userId: '', loading: false, error: false });
        const { onPlay } = this.props;
        if (onPlay) {
          onPlay();
        }
      })
      .catch(() => {
        this.setState({ loading: false, error: true });
      });
    event.preventDefault();
  }

  render(): React.ReactNode {
    const { userId, loading, error } = this.state;
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <TextField
          id="user-name"
          label="User Name"
          value={userId}
          onChange={this.handleChange}
          required
        />
        <Button color="primary" variant="contained" type="submit" disabled={loading}>
          Play
        </Button>
        {error && <div>Sorry, An error occured!</div>}
      </form>
    );
  }
}
