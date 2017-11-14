import React from 'react';
import PropTypes from 'prop-types';

const ScoreGetTeam = props =>

  <div className="get-team-score-container">
    <div>{ props.getPlayerScore }</div>
    <div>{ props.getPlayerScore - props.givePlayerScore }</div>
  </div>;

  ScoreGetTeam.propTypes = {
    players: PropTypes.array,
    getPlayerScore: PropTypes.number,
    givePlayerScore: PropTypes.number
  }


export default ScoreGetTeam;
