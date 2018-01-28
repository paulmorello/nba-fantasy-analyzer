import React, { Component } from 'react';
import PropTypes from 'prop-types';

// File imports
import PlayerStatsCard from './PlayerStatsCard';

class PlayerCardDetailed extends Component {

  render() {
    return (
      <div className="player-card-detailed-container">
        <PlayerStatsCard />
      </div>
    )
  }
}

  PlayerCardDetailed.propTypes = {
  }


export default PlayerCardDetailed;
