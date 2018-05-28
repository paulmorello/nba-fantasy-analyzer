import React, { Component } from 'react';
import PropTypes from 'prop-types';

// File imports
import PlayerStatsCard from './PlayerStatsCard';

class PlayerCardDetailed extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
      console.log(this.props.spotlightPlayer);
      console.log(this.props.getSpotlightPlayer);

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
    addPlayerToState: PropTypes.func,
    getSpotlightPlayer: PropTypes.func
  }


export default PlayerCardDetailed;
