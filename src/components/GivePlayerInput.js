import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GivePlayerInput extends Component {

  render() {
    return(
      <div>
        <input
          type="text"
          placeholder="Enter a player" />
        <button>Add Player</button>
      </div>
    )
  }
}

  GivePlayerInput.propTypes = {
    players: PropTypes.array.isRequired,
    addGivePlayer: PropTypes.func
  }


export default GivePlayerInput;
