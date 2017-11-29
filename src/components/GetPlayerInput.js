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
    this.props.addPlayerToState(this.state.playerName)

    setTimeout( () => {
      this.props.addGetPlayer(this.state.playerName)
      console.log(this.state);
    }, 3000)
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
