import React, { Component } from 'react';
import PropTypes from 'prop-types';

// File imports
import PlayerStatsCard from './PlayerStatsCard';

class PlayerCardDetailed extends Component {

  render() {
    const spotlightPlayer = this.props.spotlightPlayer

    return (
      <div className="player-card-detailed-container"
        onClick={ this.handleClick }>
        <PlayerStatsCard
          name={ spotlightPlayer }/>
      </div>
    )
  }
}

  PlayerCardDetailed.propTypes = {
    players: PropTypes.array.isRequired,
    spotlightPlayer: PropTypes.string.isRequired,
  }


export default PlayerCardDetailed;
