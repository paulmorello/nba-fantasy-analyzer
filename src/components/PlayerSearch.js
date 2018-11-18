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

    // change the loading state to loading
    this.props.setLoadingState();

    let playerName = this.state.playerName;
    let playerInSpotlightState = false;

    if (playerName) {

      // mapping over players in state and adding player if necessary
      this.props.spotlightPlayer.map( (player, index) => {

        // player is already in state
        if (player.name === playerName) {
          playerInSpotlightState = true;
          console.log('player is already in state');
          // change the loading state back to not loading
          this.props.setNotLoadingState();

          // check if player is already listed as the spotlight player
          if (!player.isSpotlight) {
            this.props.addGetPlayer(playerName);
          } else {
            console.log('player is already in the get team');
          }
        }
        return player
      })

      // if not already in state, app will retrieve stats and add player to state
      if (!playerInSpotlightState) {
        this.props.addPlayerToState(playerName)

        // needs time to first retrieve the stats and add to state before adding
        // player to the get team
        setTimeout( () => {
          this.props.newSpotlightPlayer(playerName)
        }, 5000)
      }
    } else {
      // change the loading state back to not loading
      this.props.setNotLoadingState();
      console.log("Please add a Player Name");
    }
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
    addPlayerToState: PropTypes.func,
    setLoadingState: PropTypes.func.isRequired,
    setNotLoadingState: PropTypes.func.isRequired,
    newSpotlightPlayer: PropTypes.func.isRequired
  }


export default PlayerSearch;
