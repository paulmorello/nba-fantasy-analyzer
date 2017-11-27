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
      points={player.points}
      assists={player.assists}
      rating={player.rating} />
  )}
  </div>;

  GetTeamDisplay.propTypes = {
    players: PropTypes.array.isRequired
  }


export default GetTeamDisplay;
