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
    const newPlayerStats = await NBA.stats.playerProfile({
                                  PlayerID: player.playerId,
                                  Season: "2017-18"
                                })
                                .then( data => {
                                  return data;
                                })

    const playerCurrentSeasonStats = newPlayerStats.seasonTotalsRegularSeason
                                  .filter( season => season.seasonId === "2017-18" );

    const addPlayerToState = {
      name: playerStats.playerHeadlineStats[0].playerName,
      season: playerCurrentSeasonStats[0].seasonId,
      team: playerCurrentSeasonStats[0].teamAbbreviation,
      points: playerStats.playerHeadlineStats[0].pts,
      assists: playerStats.playerHeadlineStats[0].ast,
      rebounds: playerCurrentSeasonStats[0].reb,
      orebounds: playerCurrentSeasonStats[0].oreb,
      drebounds: playerCurrentSeasonStats[0].dreb,
      blocks: playerCurrentSeasonStats[0].blk,
      steals: playerCurrentSeasonStats[0].stl,
      fg3a: playerCurrentSeasonStats[0].fG3A,
      fg3m: playerCurrentSeasonStats[0].fG3M,
      fg3Pct: playerCurrentSeasonStats[0].fg3Pct,
      fgPct: playerCurrentSeasonStats[0].fgPct,
      fga: playerCurrentSeasonStats[0].fga,
      fgm: playerCurrentSeasonStats[0].fgm,
      ftPct: playerCurrentSeasonStats[0].ftPct,
      fta: playerCurrentSeasonStats[0].fta,
      ftm: playerCurrentSeasonStats[0].ftm,
      gp: playerCurrentSeasonStats[0].gp,
      gs: playerCurrentSeasonStats[0].gs,
      min: playerCurrentSeasonStats[0].min,
      pf: playerCurrentSeasonStats[0].pf,
      tov: playerCurrentSeasonStats[0].tov,
      age: playerCurrentSeasonStats[0].playerAge,
      rating: 99,
      toGive: false,
      toGet: false
    }

    return addPlayerToState
  }

  addPlayer = (playerName) => {

    let player = this.getPlayerStats(playerName);
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
