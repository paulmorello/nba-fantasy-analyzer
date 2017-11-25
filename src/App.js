import React, { Component } from 'react';
import './App.css';
import NBA from 'nba';

// File imports
import Navbar from './components/Navbar';
import TeamSelection from './components/TeamSelection';
import TradeSummary from './components/TradeSummary';

class App extends Component {

  state = {
    players: [
      {
        name: 'Lebron James',
        rating: 99,
        toGive: false,
        toGet: false
      },{
        name: 'Kristaps Porzingis',
        rating: 99,
        toGive: false,
        toGet: false
      },{
        name: 'Kawhi Leonard',
        rating: 99,
        toGive: false,
        toGet: false
      },{
        name: 'Kevin Durant',
        rating: 99,
        toGive: false,
        toGet: false
      },{
        name: 'Steph Curry',
        rating: 99,
        toGive: false,
        toGet: false
      },{
        name: 'James Harden',
        rating: 99,
        toGive: false,
        toGet: false
      },{
        name: 'Kwame Brown',
        rating: 11,
        toGive: false,
        toGet: false
      },{
        name: 'John Wall',
        rating: 90,
        toGive: false,
        toGet: false
      },{
        name: 'Chris Paul',
        rating: 86,
        toGive: false,
        toGet: false
      }
    ]
  }

  async getPlayerStats () {
    const player = NBA.findPlayer('Stephen Curry');
    // NBA.stats.playerInfo({ PlayerID: player.playerId })
    //   .then((data) => {
    //     const playerStats = data;
    //     stats = playerStats.commonPlayerInfo[0];
    //   })

    const playerStats = await NBA.stats.playerInfo({ PlayerID: player.playerId })
                              .then( data => {
                                return data;
                              })

    console.log(playerStats.playerHeadlineStats[0].playerName);
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
          getPlayerStats={ this.getPlayerStats } />
        <TradeSummary
          players={ this.state.players }
          givePlayerScore={ givePlayerScore }
          getPlayerScore={ getPlayerScore } />
      </div>
    );
  }
}

export default App;
