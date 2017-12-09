import React from 'react';
import PropTypes from 'prop-types';

const ScoreGetTeam = props =>

  <div className="get-team-score-container">
    <div>
      <span className="team-score">Team Score: </span> { props.getPlayerScore },
      <span className="team-score">Trade Diff: </span> { props.getPlayerScore - props.givePlayerScore }
    </div>
    <div>
      { props.getPlayerStatDiff }
    </div>
  </div>;

  ScoreGetTeam.propTypes = {
    players: PropTypes.array,
    getPlayerScore: PropTypes.number,
    givePlayerScore: PropTypes.number,
    getPlayerStatDiff: PropTypes.number
  }


export default ScoreGetTeam;
