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
        players={ props.players }
        removeGivePlayer={ props.removeGivePlayer }
        removeGetPlayer={ props.removeGetPlayer } />
      <ScoreGiveTeam
        players={ props.players }
        givePlayerScore={ props.givePlayerScore }
        getPlayerScore={ props.getPlayerScore }
        playerStatDiff={ props.playerStatDiff } />
    </div>
    <div className="get-team-container">
      <GetTeamDisplay
        players={ props.players }
        removeGetPlayer={ props.removeGetPlayer }
        removeGivePlayer={ props.removeGivePlayer } />
      <ScoreGetTeam
        players={ props.players }
        getPlayerScore={ props.getPlayerScore }
        givePlayerScore={ props.givePlayerScore }
        playerStatDiff={ props.playerStatDiff } />
    </div>
  </div>;

  TradeSummary.propTypes = {
    players: PropTypes.array.isRequired,
    givePlayerScore: PropTypes.number,
    getPlayerScore: PropTypes.number,
    removeGetPlayer: PropTypes.func,
    removeGivePlayer: PropTypes.func,
    playerStatDiff: PropTypes.array
  }

export default TradeSummary;
