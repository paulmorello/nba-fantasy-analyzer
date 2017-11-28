import React from 'react';
import PropTypes from 'prop-types';

const GetPlayerInput = props =>
  <div>
    <input
      type="text"
      placeholder="Enter a player"
      onClick={ e => props.addPlayerToState(e.target.value, 'get') } />
    <button>Add Player</button>
  </div>;

  GetPlayerInput.propTypes = {
    players: PropTypes.array,
    addGetPlayer: PropTypes.func,
    addPlayerToState: PropTypes.func
  }


export default GetPlayerInput;
