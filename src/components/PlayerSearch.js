import React, { Component } from 'react';
import PropTypes from 'prop-types';

// File imports
import Autocomplete from './Autocomplete.js';

class PlayerSearch extends Component {

  constructor() {
    super();
    this.state = {
      playerName: ''
    };

    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    this.setState({ playerName: e.target.value })
  }

  handleClick() {

    // still need to think of how to do the spotlight player thing
    this.props.changeSpotlightPlayer(this.state.playerName)
  }

  render() {
    return (
      <div className="player-search-container">
        <input
          type="text"
          placeholder="Enter a player"
          list="players"
          placeholder="Enter a player"
          onChange={ e => this.handleChange(e) } />
          <Autocomplete />
        <button onClick={ this.handleClick }>Add Player</button>
      </div>
    )
  }
}

  PlayerSearch.propTypes = {
    players: PropTypes.array.isRequired,
    spotlightPlayer: PropTypes.array.isRequired,
    changeSpotlightPlayer: PropTypes.func,
    addPlayerToState: PropTypes.func
  }


export default PlayerSearch;
