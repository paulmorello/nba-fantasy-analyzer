import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayerStatsCard extends Component {

  render() {
    return (
      <div className="player-stats-card">
        <div className="player-profile-pic">
        </div>
        <div className="player-profile-info">
          <div className="player-profile-header">
            { this.props.name }, { this.props.age }, { this.props.team }
          </div>
          <div className="player-profile-stats">

          </div>
        </div>
      </div>
    )
  }
}

  PlayerStatsCard.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    team: PropTypes.string
  }


export default PlayerStatsCard;
