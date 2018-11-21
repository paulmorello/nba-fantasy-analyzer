import React, { Component } from 'react';
import PropTypes from 'prop-types';

// File imports
import PlayerStatsCard from './PlayerStatsCard';

class PlayerCardDetailed extends Component {

  constructor() {
    super();
    this.state = {
      playerName: '',

    }
  }

  componentWillMount() {

  }

  componentDidMount() {
  }

  render() {

    return (
      <div className="player-card-detailed-container">

      </div>
    )
  }
}

  PlayerCardDetailed.propTypes = {
    players: PropTypes.array.isRequired,
    addSpotlightPlayer: PropTypes.func.isRequired,
    setLoadingState: PropTypes.func.isRequired,
    setNotLoadingState: PropTypes.func.isRequired
  }


export default PlayerCardDetailed;
