import React from 'react';
import PropTypes from 'prop-types';

// File imports
import Player from './Player';

const GetTeamDisplay = props =>

  <div className="get-team-display-container">
  { props.players
    .filter( player => player.toGet )
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
      rating={player.rating} />
  )}
  </div>;

  GetTeamDisplay.propTypes = {
    players: PropTypes.array.isRequired
  }


export default GetTeamDisplay;
