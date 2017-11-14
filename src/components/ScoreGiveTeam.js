import React from 'react';
import PropTypes from 'prop-types';

const ScoreGiveTeam = props =>

  <div className="give-team-score-container">
    <div>{ props.givePlayerScore }</div>
    <div>{ props.givePlayerScore - 200 }</div>
  </div>;

  ScoreGiveTeam.propTypes = {
    players: PropTypes.array,
    givePlayerScore: PropTypes.number
  }


export default ScoreGiveTeam;
