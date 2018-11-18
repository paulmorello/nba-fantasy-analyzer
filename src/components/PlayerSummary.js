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
          addPlayerToState={ this.props.addPlayerToState }
          setLoadingState={ this.props.setLoadingState }
          setNotLoadingState={ this.props.setNotLoadingState }
          newSpotlightPlayer={ this.props.newSpotlightPlayer }/>
        <PlayerCardDetailed
          players={ this.props.players }
          spotlightPlayer={ this.props.spotlightPlayer }
          setLoadingState={ this.props.setLoadingState }
          setNotLoadingState={ this.props.setNotLoadingState } />
      </div>
    )
  }
}

  PlayerSummary.propTypes = {
    players: PropTypes.array.isRequired,
    spotlightPlayer: PropTypes.array.isRequired,
    changeSpotlightPlayer: PropTypes.func,
    addPlayerToState: PropTypes.func,
    setLoadingState: PropTypes.func.isRequired,
    setNotLoadingState: PropTypes.func.isRequired,
    newSpotlightPlayer: PropTypes.func.isRequired
  }


export default PlayerSummary;
