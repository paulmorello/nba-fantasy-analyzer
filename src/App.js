import React, { Component } from 'react';
import './App.css';
import NBA from 'nba';

// File imports
import Navbar from './components/Navbar';
import TeamSelection from './components/TeamSelection';
import TradeSummary from './components/TradeSummary';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  async componentWillMount() {
    this.state.players.push(await this.getPlayerStats('Stephen Curry'));
    console.log(this.state);
  }

  async getPlayerStats (playerName) {
    const player = NBA.findPlayer(playerName);
    const playerStats = await NBA.stats.playerInfo({ PlayerID: player.playerId })
                              .then( data => {
                                return data;
                              })

    const addPlayerToState = {
      name: playerStats.playerHeadlineStats[0].playerName,
      points: playerStats.playerHeadlineStats[0].pts,
      assists: playerStats.playerHeadlineStats[0].ast,
      rating: 99,
      toGive: false,
      toGet: false
    }
    console.log(playerStats);

    return addPlayerToState
  }

  addPlayer = () => {

    let player = this.getPlayerStats('Lebron James');
    let that = this;

    setTimeout( () => {
      player = player.then( data => {
        that.state.players.push(data);
        that.setState(that.state);
      });
    }, 1000);

  }

  getGivePlayerScore = () =>
    this.state.players.reduce(
      (total, player) => player.toGive ? total + player.rating : total,
      0
    );

  getGetPlayerScore = () =>
    this.state.players.reduce(
      (total, player) => player.toGet ? total + player.rating : total,
      0
    );

  addGivePlayer = (playerName) =>
    this.setState({
      players: this.state.players.map( (player, index) => {
        if (player.name === playerName) {
          return {
            ...player,
            toGive: true
          }
        }
        return player
      })
    })

  addGetPlayer = (playerName) =>
    this.setState({
      players: this.state.players.map( (player, index) => {
        if (player.name === playerName) {
          return {
            ...player,
            toGet: true
          }
        }
        return player
      })
    })

  render() {
    const givePlayerScore = this.getGivePlayerScore();
    const getPlayerScore = this.getGetPlayerScore();

    return (
      <div className="App">
        <Navbar />
        <TeamSelection
          players={ this.state.players }
          addGivePlayer={ this.addGivePlayer }
          addGetPlayer={ this.addGetPlayer }
          addPlayerToState={ this.addPlayer } />
        <TradeSummary
          players={ this.state.players }
          givePlayerScore={ givePlayerScore }
          getPlayerScore={ getPlayerScore } />
      </div>
    );
  }
}

export default App;
