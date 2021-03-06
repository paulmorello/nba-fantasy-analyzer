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
          currentSpotlightPlayer={ this.props.currentSpotlightPlayer }
          addPlayerToState={ this.props.addPlayerToState }
          setLoadingState={ this.props.setLoadingState }
          setNotLoadingState={ this.props.setNotLoadingState }
          addSpotlightPlayer={ this.props.addSpotlightPlayer }/>
        <PlayerCardDetailed
          players={ this.props.players }
          spotlightPlayer={ this.props.spotlightPlayer }
          setLoadingState={ this.props.setLoadingState }
          setNotLoadingState={ this.props.setNotLoadingState }
          addSpotlightPlayer={ this.props.addSpotlightPlayer }
          currentSpotlightPlayer={ this.props.currentSpotlightPlayer } />
      </div>
    )
  }
}

  PlayerSummary.propTypes = {
    players: PropTypes.array.isRequired,
    spotlightPlayer: PropTypes.array.isRequired,
    currentSpotlightPlayer: PropTypes.func,
    addPlayerToState: PropTypes.func,
    setLoadingState: PropTypes.func.isRequired,
    setNotLoadingState: PropTypes.func.isRequired,
    addSpotlightPlayer: PropTypes.func
  }


export default PlayerSummary;
