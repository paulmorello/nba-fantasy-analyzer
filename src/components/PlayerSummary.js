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
          isLoading={ this.props.isLoading }
          setLoadingState={ this.props.setLoadingState }
          setNotLoadingState={ this.props.setNotLoadingState }
          addGivePlayer={ this.addGivePlayer }
          addGetPlayer={ this.addGetPlayer }
          addPlayerToState={ this.addPlayerToState } />
        <PlayerCardDetailed
          players={ this.props.players }
          spotlightPlayer={ this.props.spotlightPlayer }
          isLoading={ this.props.isLoading }
          setLoadingState={ this.props.setLoadingState }
          setNotLoadingState={ this.props.setNotLoadingState }
          addGivePlayer={ this.addGivePlayer }
          addGetPlayer={ this.addGetPlayer }
          addPlayerToState={ this.addPlayerToState } />
      </div>
    )
  }
}

  PlayerSummary.propTypes = {
    players: PropTypes.array.isRequired,
    spotlightPlayer: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    setLoadingState: PropTypes.func.isRequired,
    setNotLoadingState: PropTypes.func.isRequired,
    addGivePlayer: PropTypes.func,
    addGetPlayer: PropTypes.func,
    addPlayerToState: PropTypes.func
  }


export default PlayerSummary;
