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
        {this.props.spotlightPlayer}
      </div>
    )
  }
}

  PlayerCardDetailed.propTypes = {
    players: PropTypes.array.isRequired,
    spotlightPlayer: PropTypes.array.isRequired,
  }


export default PlayerCardDetailed;
