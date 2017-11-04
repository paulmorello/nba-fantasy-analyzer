import React from 'react';

// File imports
import ScoreGiveTeam from './ScoreGiveTeam';
import ScoreGetTeam from './ScoreGetTeam';

const TradeSummary = () =>

  <div className="trade-summary-container">
    <ScoreGiveTeam />
    <ScoreGetTeam />
  </div>;


export default TradeSummary;
