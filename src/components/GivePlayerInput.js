import React from 'react';
import PropTypes from 'prop-types';

const GivePlayerInput = props =>
  <div>
    <input
      type="text"
      placeholder="Enter a player"
      onChange={ e => props.addGivePlayer(e.target.value) } />
    <button>Add Player</button>
  </div>;

  GivePlayerInput.propTypes = {
    players: PropTypes.array.isRequired,
    addGivePlayer: PropTypes.func
  }


export default GivePlayerInput;
