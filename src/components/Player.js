import React from 'react';
import PropTypes from 'prop-types';

const Player = props =>

  <div className="player-container">
    <div className="player-name">
      <span>{ props.name } </span>
    </div>
    <div className="player-rating">
      { props.rating }
    </div>
    <div className="player-stats">
      <span>Pts: { props.points }, </span>
      <span>Ast: { props.assists } </span>
    </div>
  </div>;

  Player.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }


export default Player;
