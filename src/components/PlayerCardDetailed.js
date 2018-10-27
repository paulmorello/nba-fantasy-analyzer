import React, { Component } from 'react';
import PropTypes from 'prop-types';

// File imports
import PlayerStatsCard from './PlayerStatsCard';

class PlayerCardDetailed extends Component {

  render() {
    const spotlightPlayer = this.props.spotlightPlayer

    console.log(spotlightPlayer);

    return (
      <div className="player-card-detailed-container"
        onClick={ this.handleClick }>
        <PlayerStatsCard
          name={ spotlightPlayer[0] }/>
      </div>
    )
  }
}

  PlayerCardDetailed.propTypes = {
    players: PropTypes.array.isRequired,
    spotlightPlayer: PropTypes.array.isRequired,
  }


export default PlayerCardDetailed;
