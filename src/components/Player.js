import React from 'react';
import PropTypes from 'prop-types';

const Player = props =>

  <div className="player-container">
    <div className="player-name">{ props.name }</div>
    <div className="player-rating">{ props.rating }</div>
  </div>;

  Player.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }


export default Player;
