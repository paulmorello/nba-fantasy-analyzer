import React, { Component } from 'react';
import PropTypes from 'prop-types';

// File imports
import PlayerStatsCard from './PlayerStatsCard';

class PlayerCardDetailed extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log(this.props.players.map( (player, index) => {
      if (player.name === this.props.spotlightPlayer ) {
        return player
      }
    }))
  }

  render() {
      console.log(this.props.spotlightPlayer);

    return (
      <div className="player-card-detailed-container"
        onClick={ this.handleClick }>
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
    addPlayerToState: PropTypes.func,
    getSpotlightPlayer: PropTypes.func
  }


export default PlayerCardDetailed;
