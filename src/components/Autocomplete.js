import React, { Component } from 'react';

// File imports
import PlayerNames from '../playerNames.json';

class Autocomplete extends Component {
  constructor() {
    super();
    this.state = {
      playerList: PlayerNames.players
    }
  }

  render() {
    return (
      <datalist id="players">
        { this.state.playerList.map( (player) => {
          return <option key={player} value={player} />
        })}
      </datalist>
    )
  }
}

export default Autocomplete;
