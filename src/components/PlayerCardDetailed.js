import React, { Component } from 'react';
import PropTypes from 'prop-types';

// File imports
import PlayerStatsCard from './PlayerStatsCard';

class PlayerCardDetailed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spotlightPlayer: [],
    }
  }

  componentDidMount() {
    let that = this;

    setTimeout( () => {
      that.setState({
        spotlightPlayer: that.props.currentSpotlightPlayer()
      })
    }, 3000)

    console.log(this.state.spotlightPlayer);
  }

  render() {
    console.log(this.props.players);

    return (
      <div className="player-card-detailed-container">
        { this.props.players
          .filter( player => player.isSpotlight )
          .map( (player, index) =>
          <PlayerStatsCard
            key={index}
            name={player.name}
          />
        )}
      </div>
    )
  }
}

  PlayerCardDetailed.propTypes = {
    players: PropTypes.array.isRequired,
    addSpotlightPlayer: PropTypes.func.isRequired,
    setLoadingState: PropTypes.func.isRequired,
    setNotLoadingState: PropTypes.func.isRequired,
    currentSpotlightPlayer: PropTypes.func
  }


export default PlayerCardDetailed;
