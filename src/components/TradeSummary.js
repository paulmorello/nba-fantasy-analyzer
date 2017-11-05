import React from 'react';
import PropTypes from 'prop-types';

// File imports
import ScoreGiveTeam from './ScoreGiveTeam';
import ScoreGetTeam from './ScoreGetTeam';
import GiveTeamDisplay from './GiveTeamDisplay';
import GetTeamDisplay from './GetTeamDisplay';

const TradeSummary = () =>

  <div className="trade-summary-container">
    <div className="give-team-container">
      <GiveTeamDisplay />
      <ScoreGiveTeam />
    </div>
    <div className="get-team-container">
      <GetTeamDisplay />
      <ScoreGetTeam />
    </div>
  </div>;

  TradeSummary.propTypes = {
    players: PropTypes.array.isRequired
  }

export default TradeSummary;
