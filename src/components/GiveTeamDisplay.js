import React from 'react';
import PropTypes from 'prop-types';

// File imports
import Player from './Player';

const GiveTeamDisplay = props =>

  <div className="give-team-display-container">
  {props.players
    .filter( player => player.toGive )
    .map( (player, index) =>
    <Player
      key={index}
      name={player.name}
      team={player.team}
      fgPct={player.fgPct}
      points={player.points}
      assists={player.assists}
      rebounds={player.rebounds}
      blocks={player.blocks}
      steals={player.steals}
      rating={player.rating}
      removeGivePlayer={props.removeGivePlayer} />
  )}
  </div>;

  GiveTeamDisplay.propTypes = {
    players: PropTypes.array.isRequired,
    removeGetPlayer: PropTypes.func,
    removeGivePlayer: PropTypes.func
  }


export default GiveTeamDisplay;
