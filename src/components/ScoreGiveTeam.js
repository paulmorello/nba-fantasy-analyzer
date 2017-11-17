import React from 'react';
import PropTypes from 'prop-types';

const ScoreGiveTeam = props =>

  <div className="give-team-score-container">
    <div>Team Score: { props.givePlayerScore }</div>
    <div>Trade Diff: { props.givePlayerScore - props.getPlayerScore }</div>
  </div>;

  ScoreGiveTeam.propTypes = {
    players: PropTypes.array,
    givePlayerScore: PropTypes.number,
    getPlayerScore: PropTypes.number
  }


export default ScoreGiveTeam;
