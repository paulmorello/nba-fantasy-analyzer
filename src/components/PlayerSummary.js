import React, { Component } from 'react';
import PropTypes from 'prop-types';

// file imports
import PlayerSearch from './PlayerSearch';

class PlayerSummary extends Component {

  render() {
    return (
      <div className="player-summary-container">
        <PlayerSearch />
      </div>
    )
  }
}

  PlayerSummary.propTypes = {
  }


export default PlayerSummary;
