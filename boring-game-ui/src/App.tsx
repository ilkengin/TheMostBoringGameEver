import React from 'react';
import './App.css';
import Leaderboard from './leaderboard/Leaderboard';
import Playview from './playview/Playview';

type AppState = {
  refreshLeaderboard: boolean;
};

export default class App extends React.Component<Record<string, unknown>, AppState> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = { refreshLeaderboard: false };

    this.onPlayed = this.onPlayed.bind(this);
    this.onLeaderboardLoaded = this.onLeaderboardLoaded.bind(this);
  }

  private onLeaderboardLoaded() {
    this.setState({ refreshLeaderboard: false });
  }

  private onPlayed() {
    this.setState({ refreshLeaderboard: true });
  }

  render(): React.ReactNode {
    const { refreshLeaderboard } = this.state;
    return (
      <div className="App">
        <Leaderboard refresh={refreshLeaderboard} leaderboardLoaded={this.onLeaderboardLoaded} />
        <Playview onPlay={this.onPlayed} />
      </div>
    );
  }
}
