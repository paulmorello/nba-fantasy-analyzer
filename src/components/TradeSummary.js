import React from 'react';
import PropTypes from 'prop-types';

// File imports
import ScoreGiveTeam from './ScoreGiveTeam';
import ScoreGetTeam from './ScoreGetTeam';
import GiveTeamDisplay from './GiveTeamDisplay';
import GetTeamDisplay from './GetTeamDisplay';

const TradeSummary = props =>

  <div className="trade-summary-container">
    <div className="give-team-container">
      <GiveTeamDisplay
        players={ props.players } />
      <ScoreGiveTeam
        players={ props.players }
        givePlayerScore={ props.givePlayerScore }
        getPlayerScore={ props.getPlayerScore } />
    </div>
    <div className="get-team-container">
      <GetTeamDisplay
        players={ props.players } />
      <ScoreGetTeam
        players={ props.players }
        getPlayerScore={ props.getPlayerScore }
        givePlayerScore={ props.givePlayerScore } />
    </div>
  </div>;

  TradeSummary.propTypes = {
    players: PropTypes.array.isRequired,
    givePlayerScore: PropTypes.number,
    getPlayerScore: PropTypes.number
  }

export default TradeSummary;
