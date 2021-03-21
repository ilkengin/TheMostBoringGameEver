import { TextField } from '@material-ui/core';
import React from 'react';
import './App.css';
import Leaderboard from './leaderboard/Leaderboard';

type AppProps = {}

export default class App extends React.Component {
  constructor(props: AppProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Leaderboard />
        <form autoComplete="off">
          <TextField id="user-name" label="User Name" required />
        </form>
      </div>
    );
  }
}
