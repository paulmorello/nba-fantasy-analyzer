import React from 'react';
import PropTypes from 'prop-types';

const PlayerInput = props =>
  <div>
    <input
      type="text"
      placeholder="Enter a player" />
    <button
      onClick={ () => props.addGivePlayer('Kristaps Porzingis') }>Add Player</button>
  </div>

  PlayerInput.propTypes = {
    players: PropTypes.array,
    addGivePlayer: PropTypes.func.isRequired
  }


export default PlayerInput;
