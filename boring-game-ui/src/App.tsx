import { TextField } from '@material-ui/core';
import React from 'react';
import './App.css';

type AppProps = {}

export default class App extends React.Component {
  constructor(props: AppProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <form autoComplete="off">
          <TextField id="user-name" label="User Name" required />
        </form>
      </div>
    );
  }
}
