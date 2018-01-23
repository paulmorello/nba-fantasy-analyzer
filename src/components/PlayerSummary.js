import React, { Component } from 'react';
import PropTypes from 'prop-types';

// file imports
import PlayerSearch from './PlayerSearch';
import PlayerCardDetailed from './PlayerCardDetailed';

class PlayerSummary extends Component {

  render() {
    return (
      <div className="player-summary-container">
        <PlayerSearch />
        <PlayerCardDetailed />
      </div>
    )
  }
}

  PlayerSummary.propTypes = {
  }


export default PlayerSummary;
