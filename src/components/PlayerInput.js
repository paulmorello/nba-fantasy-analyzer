import React from 'react';
import PropTypes from 'prop-types';

const PlayerInput = props =>
  <div>
    <input
      type="text"
      placeholder="Enter a player"
      value={ props.children }
      onChange={ e => props.addGivePlayer(e.target.value) } />
    <button>Add Player</button>
  </div>;

  PlayerInput.propTypes = {
    players: PropTypes.array,
    addGivePlayer: PropTypes.func.isRequired
  }


export default PlayerInput;
