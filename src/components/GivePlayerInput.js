import React, { Component } from 'react';
import PropTypes from 'prop-types';

// file imports
import Autocomplete from './Autocomplete';

class GivePlayerInput extends Component {

  constructor() {
    super();
    this.state = {
      playerName: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ playerName: e.target.value });
  }

  handleClick() {

    // change the loading state to loading
    this.props.setLoadingState();

    let playerName = this.state.playerName;
    let playerInState = false;

    if (playerName) {

      // mapping over players in state and adding player if necessary
      this.props.players.map( (player, index) => {

        // player is already in state
        if (player.name === playerName) {
          playerInState = true;
          // change the loading state back to not loading
          this.props.setNotLoadingState();

          // check if player is already listed in the give team
          if (!player.toGive) {
            this.props.addGivePlayer(playerName);
          } else {
            console.log('player is already in the give team');
          }
        }
        return player
      })

      // if not already in state, app will retrieve stats and add player to state
      if (!playerInState) {
        this.props.addPlayerToState(playerName)

        // needs time to first retrieve the stats and add to state before adding
        // player to the give team
        setTimeout( () => {
          this.props.addGivePlayer(playerName)
        }, 5000)
      }
    } else {
      // change the loading state back to not loading
      this.props.setNotLoadingState();
      console.log("Please select a Player Name");
    }
  }

  render() {
    return(
      <div>
        <input
          type="text"
          placeholder="Enter a player"
          list="players"
          onChange={ e => this.handleChange(e) } />
        <Autocomplete />
        <button onClick={ this.handleClick }>Add Player</button>
      </div>
    )
  }
}

  GivePlayerInput.propTypes = {
    players: PropTypes.array.isRequired,
    addGivePlayer: PropTypes.func,
    addPlayerToState: PropTypes.func,
    isLoading: PropTypes.bool.isRequired,
    setLoadingState: PropTypes.func.isRequired,
    setNotLoadingState: PropTypes.func.isRequired
  }


export default GivePlayerInput;
