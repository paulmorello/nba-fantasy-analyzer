import React from 'react';
import PropTypes from 'prop-types';

const Player = props =>

  <div className="player-container">
    <div className="player-name">
      <span>{ props.name }, </span>
      <span>{ props.team } </span>
    </div>
    <div className="player-rating">
      { props.rating }
    </div>
    <div className="player-stats">
      <span>FG%: { (props.fgPct * 100).toFixed(2) }%, </span>
      <span>Pts: { props.points }, </span>
      <span>Ast: { props.assists }, </span>
      <span>Reb: { props.rebounds }, </span>
      <span>Blk: { props.blocks }, </span>
      <span>Stl: { props.steals } </span>
    </div>
  </div>;

  Player.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }


export default Player;
