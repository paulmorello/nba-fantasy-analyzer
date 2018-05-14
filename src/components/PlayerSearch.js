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
    console.log(this.props.players.map( (player, index) => {
      if (player.name === this.state.playerName) {
        return player
      } else {
        return 'player not in state'
      }
    }))
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
    isLoading: PropTypes.bool.isRequired,
    setLoadingState: PropTypes.func.isRequired,
    setNotLoadingState: PropTypes.func.isRequired,
    addGivePlayer: PropTypes.func,
    addGetPlayer: PropTypes.func,
    addPlayerToState: PropTypes.func
  }


export default PlayerSearch;
