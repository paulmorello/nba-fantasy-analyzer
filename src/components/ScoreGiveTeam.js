import React from 'react';
import PropTypes from 'prop-types';

const ScoreGiveTeam = props =>

  <div className="give-team-score-container">
    <div>
      <span className="team-score">Team Score: </span>{ props.givePlayerScore },
      <span className="team-score">Trade Diff: </span>{ props.givePlayerScore - props.getPlayerScore }
    </div>
    <div>
      <div>
        <span>FG%: { ((props.playerStatDiff[1][4] - props.playerStatDiff[0][4]) * 100 ).toFixed(2) }</span>,
        <span> FT%: { ((props.playerStatDiff[1][5] - props.playerStatDiff[0][5]) * 100 ).toFixed(2) }</span>,
        <span> Pts: { (props.playerStatDiff[1][0] - props.playerStatDiff[0][0]).toFixed(2) }</span>,
        <span> Reb: { (props.playerStatDiff[1][1] - props.playerStatDiff[0][1]).toFixed(2) }</span>
      </div>
      <div>
        <span> Ast: { (props.playerStatDiff[1][2] - props.playerStatDiff[0][2]).toFixed(2) }</span>,
        <span> 3PM: { (props.playerStatDiff[1][3] - props.playerStatDiff[0][3]).toFixed(2) }</span>,
        <span> Blk: { (props.playerStatDiff[1][6] - props.playerStatDiff[0][6]).toFixed(2) }</span>,
        <span> Stl: { (props.playerStatDiff[1][7] - props.playerStatDiff[0][7]).toFixed(2) }</span>
      </div>
    </div>
  </div>;

  ScoreGiveTeam.propTypes = {
    players: PropTypes.array,
    givePlayerScore: PropTypes.number,
    getPlayerScore: PropTypes.number,
    playerStatDiff: PropTypes.array
  }


export default ScoreGiveTeam;
