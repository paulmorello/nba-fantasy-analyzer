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

    this.props.players.map( (player, index) => {

      console.log('checking if player exists in state (GetPlayerInput)');
      console.log(player);

      if (player.name === playerName) {

        playerInState = true;
        console.log('names match and player in state (GetPlayerInput)');

        if (!player.toGet) {

          console.log('player is NOT added to the get team');

          this.props.addGetPlayer(playerName);
        } else {
          console.log('player is already in the get team');
        }
      } else {
        playerInState = false;
      }
      return player
    })

    if (!playerInState) {
      this.props.addPlayerToState(playerName)

      setTimeout( () => {
        this.props.addGetPlayer(playerName)
      }, 5000)
    }

    // this.props.addPlayerToState(this.state.playerName)
    //
    // setTimeout( () => {
    //   this.props.addGetPlayer(this.state.playerName)
    //   console.log(this.state);
    // }, 5000)
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
