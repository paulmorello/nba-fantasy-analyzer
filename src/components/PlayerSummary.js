import React, { Component } from 'react';
import PropTypes from 'prop-types';

// file imports
import PlayerSearch from './PlayerSearch';
import PlayerCardDetailed from './PlayerCardDetailed';

class PlayerSummary extends Component {

  render() {
    return (
      <div className="player-summary-container">
        <PlayerSearch
          players={ this.props.players }
          spotlightPlayer={ this.props.spotlightPlayer }
          changeSpotlightPlayer={ this.props.changeSpotlightPlayer }
          addPlayerToState={ this.props.addPlayerToState } />
        <PlayerCardDetailed
          players={ this.props.players }
          spotlightPlayer={ this.props.spotlightPlayer } />
      </div>
    )
  }
}

  PlayerSummary.propTypes = {
    players: PropTypes.array.isRequired,
    spotlightPlayer: PropTypes.array.isRequired,
    changeSpotlightPlayer: PropTypes.func,
    addPlayerToState: PropTypes.func
  }


export default PlayerSummary;
