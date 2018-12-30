import React, { Component } from 'react';
import PropTypes from 'prop-types';

// File imports
import PlayerStatsCard from './PlayerStatsCard';

class PlayerCardDetailed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spotlightPlayer: [],
    }
  }

  componentDidMount() {
    let that = this;

    setTimeout( () => {
      that.setState({
        spotlightPlayer: that.props.currentSpotlightPlayer()
      })
    }, 3000)

    console.log(this.state.spotlightPlayer);
  }

  render() {
    console.log(this.props.players);

    return (
      <div className="player-card-detailed-container">
        { this.props.players
          .filter( player => player.isSpotlight )
          .map( (player, index) =>
          <PlayerStatsCard
            key={index}
            name={player.name}
            age={player.age}
            team={player.team}
            gs={player.gs}
            gp={player.gp}
            min={player.min}
            points={player.points}
            assists={player.assists}
            blocks={player.blocks}
            rebounds={player.rebounds}
            steals={player.steals}
            fp3Pct={player.fp3Pct}
            fg3m={player.fg3m}
            fg3a={player.fg3a}
            fgPct={player.fgPct}
            fga={player.fga}
            fgm={player.fgm}
            ftPct={player.ftPct}
            fta={player.fta}
            ftm={player.ftm}
            pf={player.pf}
            tov={player.tov}
          />
        )}
      </div>
    )
  }
}

  PlayerCardDetailed.propTypes = {
    players: PropTypes.array.isRequired,
    addSpotlightPlayer: PropTypes.func.isRequired,
    setLoadingState: PropTypes.func.isRequired,
    setNotLoadingState: PropTypes.func.isRequired,
    currentSpotlightPlayer: PropTypes.func
  }


export default PlayerCardDetailed;
