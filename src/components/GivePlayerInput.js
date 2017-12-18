import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

    let playerName = this.state.playerName;
    let playerInState = false;

    // mapping over players in state and adding player if necessary
    this.props.players.map( (player, index) => {

      // player is already in state
      if (player.name === playerName) {
        playerInState = true;

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
  }

  render() {
    return(
      <div>
        <input
          type="text"
          placeholder="Enter a player"
          onChange={ e => this.handleChange(e) } />
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
