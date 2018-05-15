import React, { Component } from 'react';
import PropTypes from 'prop-types';

// File imports
import PlayerStatsCard from './PlayerStatsCard';

class PlayerCardDetailed extends Component {

  componentWillMount() {
    const newSpotlightPlayer = this.getSpotlightPlayer(this.props.spotlightPlayer);
    console.log(newSpotlightPlayer);
  }

  getSpotlightPlayer(spotlightPlayer) {

    this.props.players.map( (player, index) => {
      console.log(player.name);
      if ( player.name === spotlightPlayer.name ) {
        return player
      } else {
        return 'Please select a player'
      }
    })
  }

  render() {

    return (
      <div className="player-card-detailed-container">
        <PlayerStatsCard />
      </div>
    )
  }
}

  PlayerCardDetailed.propTypes = {
    players: PropTypes.array.isRequired,
    spotlightPlayer: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    setLoadingState: PropTypes.func.isRequired,
    setNotLoadingState: PropTypes.func.isRequired,
    addGivePlayer: PropTypes.func,
    addGetPlayer: PropTypes.func,
    addPlayerToState: PropTypes.func
  }


export default PlayerCardDetailed;
