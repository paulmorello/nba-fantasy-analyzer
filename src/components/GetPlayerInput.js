import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GetPlayerInput extends Component {

  constructor() {
    super();
    this.state = {
      playerName: ''
    };
    this.handleClick = this.handleClick.bind(this)
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
        console.log('player is already in state');

        // check if player is already listed in the get team
        if (!player.toGet) {
          this.props.addGetPlayer(playerName);
        } else {
          console.log('player is already in the get team');
        }
      }
      return player
    })

    // if not already in state, app will retrieve stats and add player to state
    if (!playerInState) {
      this.props.addPlayerToState(playerName)

      // needs time to first retrieve the stats and add to state before adding
      // player to the get team
      setTimeout( () => {
        this.props.addGetPlayer(playerName)
      }, 5000)
    }
  }

  render() {
    return (
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

  GetPlayerInput.propTypes = {
    players: PropTypes.array,
    addGetPlayer: PropTypes.func,
    addPlayerToState: PropTypes.func
  }


export default GetPlayerInput;
