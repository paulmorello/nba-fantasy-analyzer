import React from 'react';
import PropTypes from 'react';

// File imports
import PlayerInput from './PlayerInput';

const GetTeam = props =>

  <div className="team-container">
    <h2>Players you receive</h2>
    <PlayerInput
      players={ props.players }
      addGetPlayer={ props.addGetPlayer } />
  </div>;

  GetTeam.propTypes = {
    players: PropTypes.array,
    addGetPlayer: PropTypes.func
  }


export default GetTeam;
