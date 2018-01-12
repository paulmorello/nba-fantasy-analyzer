import React, { Component } from 'react';
import PropTypes from 'prop-types';

// File imports
import Autocomplete from './Autocomplete.js';

class PlayerSearch extends Component {

  render() {
    return (
      <div className="player-search-container">
        <input
          type="text"
          placeholder="Enter a player" />
          <Autocomplete />
        <button>Add Player</button>
      </div>
    )
  }
}

  PlayerSearch.propTypes = {
  }


export default PlayerSearch;
