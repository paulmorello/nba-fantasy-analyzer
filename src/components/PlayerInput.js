import React from 'react';
import PropTypes from 'prop-types';

const PlayerInput = props =>
  <form>
    <input
      type="text"
      placeholder="Enter a player" />
    <button
      onClick={ () => props.addGivePlayer('Kristaps Porzingis') }>Add Player</button>
  </form>

  PlayerInput.propTypes = {
    players: PropTypes.array,
    addGivePlayer: PropTypes.func.isRequired
  }


export default PlayerInput;
