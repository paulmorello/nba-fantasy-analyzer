import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

// File imports
import Player from './Player';

class GiveTeamDisplay extends Component {

  render() {
    if (!this.props.isLoading) {
      return (
        <div className="give-team-display-container">
        {this.props.players
          .filter( player => player.toGive )
          .map( (player, index) =>
          <Player
            key={index}
            name={player.name}
            team={player.team}
            fgPct={player.fgPct}
            ftPct={player.ftPct}
            points={player.points}
            assists={player.assists}
            rebounds={player.rebounds}
            blocks={player.blocks}
            steals={player.steals}
            tov={player.tov}
            pf={player.pf}
            rating={player.rating}
            toGet={player.toGet}
            toGive={player.toGive}
            removeGivePlayer={this.props.removeGivePlayer} />
        )}
        </div>
      )
    } else {
      return (
        <div className="give-team-display-container">
          <Spinner name="line-scale-pulse-out" color="steelblue"/>
        </div>
      )
    }
  }
}

  GiveTeamDisplay.propTypes = {
    players: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    setLoadingState: PropTypes.func.isRequired,
    setNotLoadingState: PropTypes.func.isRequired,
    removeGetPlayer: PropTypes.func,
    removeGivePlayer: PropTypes.func
  }


export default GiveTeamDisplay;
