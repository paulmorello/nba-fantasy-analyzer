import React from 'react';
import PropTypes from 'prop-types';

const ScoreGetTeam = props =>

  <div className="get-team-score-container">
    <div>
      <span className="team-score">Team Score: </span> { props.getPlayerScore },
      <span className="team-score">Trade Diff: </span> { props.getPlayerScore - props.givePlayerScore }
    </div>
    <div>
    <span>Pts: { (props.playerStatDiff[0][0] - props.playerStatDiff[1][0]).toFixed(2) }</span>,
    <span> Reb: { (props.playerStatDiff[0][1] - props.playerStatDiff[1][1]).toFixed(2) }</span>,
    <span> 3PM: { (props.playerStatDiff[0][2] - props.playerStatDiff[1][2]).toFixed(2) }</span>,
    <span> FG%: { (props.playerStatDiff[0][3] - props.playerStatDiff[1][3]).toFixed(2) }</span>,
    <span> FT%: { (props.playerStatDiff[0][4] - props.playerStatDiff[1][4]).toFixed(2) }</span>,
    <span> Blk: { (props.playerStatDiff[0][5] - props.playerStatDiff[1][5]).toFixed(2) }</span>,
    <span> Stl: { (props.playerStatDiff[0][6] - props.playerStatDiff[1][6]).toFixed(2) }</span>
    </div>
  </div>;

  ScoreGetTeam.propTypes = {
    players: PropTypes.array,
    getPlayerScore: PropTypes.number,
    givePlayerScore: PropTypes.number,
    playerStatDiff: PropTypes.array
  }


export default ScoreGetTeam;
