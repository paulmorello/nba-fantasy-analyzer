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
      points={player.points}
      assists={player.assists}
      rating={player.rating} />
  )}
  </div>;

  GiveTeamDisplay.propTypes = {
    players: PropTypes.array.isRequired
  }


export default GiveTeamDisplay;
