import React from 'react';
import PropTypes from 'prop-types';

// File imports
import Player from './Player';

const GiveTeamDisplay = props =>

  <div className="give-team-display-container">
  {props.players
    .map( (player, index) =>
    <Player
      key={index}
      name={player.name}
      rating={player.rating} />
  )}
  </div>;

  GiveTeamDisplay.propTypes = {
    players: PropTypes.array.isRequired
  }


export default GiveTeamDisplay;
