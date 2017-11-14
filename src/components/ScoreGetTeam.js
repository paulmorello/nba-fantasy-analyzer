import React from 'react';
import PropTypes from 'prop-types';

const ScoreGetTeam = props =>

  <div className="get-team-score-container">
    <div><strong>Team Score: </strong>{ props.getPlayerScore }</div>
    <div><strong>Trade Diff: </strong>{ props.getPlayerScore - props.givePlayerScore }</div>
  </div>;

  ScoreGetTeam.propTypes = {
    players: PropTypes.array,
    getPlayerScore: PropTypes.number,
    givePlayerScore: PropTypes.number
  }


export default ScoreGetTeam;
