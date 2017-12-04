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

    const playerRating = this.getRating(playerCurrentSeasonStats);

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
      rating: playerRating,
      toGive: false,
      toGet: false
    }

    return addPlayerToState
  }

  addPlayer = (playerName) => {

    let player = this.getPlayerStats(playerName);
    let that = this;

    // player stats are retrieved and will be added to state for easier access
    // throughout the app
    setTimeout( () => {
      player = player.then( data => {
        that.state.players.push(data);
        that.setState(that.state);
      });
    }, 1000);
  }

  getRating = (player) => {

    const rating =
      ((player[0].pts * .6) +
      (player[0].reb) +
      (player[0].ast * 1.2) +
      (player[0].stl * 1.5) +
      (player[0].blk * 1.8) +
      (player[0].fG3M * 1.5) +
      ((player[0].fgm * player[0].fgPct) * .6) +
      ((player[0].ftm * player[0].ftPct) * .6) -
      (player[0].tov * 1.5))

    return Math.round(rating)
  }

  removeGetPlayer = (playerName) => {
    this.setState({
      players: this.state.players.map( (player, index) => {
        if (player.name === playerName) {
          return {
            ...player,
            toGet: false
          }
        }
        return player
      })
    })
  }

  removeGivePlayer = (playerName) => {
    this.setState({
      players: this.state.players.map( (player, index) => {
        if (player.name === playerName) {
          return {
            ...player,
            toGive: false
          }
        }
        return player
      })
    })
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
          if (!player.toGive) {
            return {
              ...player,
              toGive: true
            }
          } else {
            return player
          }
        }
        return player
      })
    })

  addGetPlayer = (playerName) =>
    this.setState({
      players: this.state.players.map( (player, index) => {
        if (player.name === playerName) {
          if (!player.toGet) {
            return {
              ...player,
              toGet: true
            }
          } else {
            return player
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
          getPlayerScore={ getPlayerScore }
          removeGivePlayer={ this.removeGivePlayer }
          removeGetPlayer={ this.removeGetPlayer } />
      </div>
    );
  }
}

export default App;
