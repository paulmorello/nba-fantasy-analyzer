import React from 'react';
import PropTypes from 'prop-types';

const GetPlayerInput = props =>
  <div>
    <input
      type="text"
      placeholder="Enter a player"
      onChange={ e => props.addGetPlayer(e.target.value) } />
    <button>Add Player</button>
  </div>;

  GetPlayerInput.propTypes = {
    players: PropTypes.array,
    addGetPlayer: PropTypes.func
  }


export default GetPlayerInput;
