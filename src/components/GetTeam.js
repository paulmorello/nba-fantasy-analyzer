import React from 'react';
import PropTypes from 'prop-types';

// File imports
import GetPlayerInput from './GetPlayerInput';

const GetTeam = props =>

  <div className="team-container">
    <h2>Players you receive</h2>
    <GetPlayerInput
      players={ props.players }
      addGetPlayer={ props.addGetPlayer } />
  </div>;

  GetTeam.propTypes = {
    players: PropTypes.array,
    addGetPlayer: PropTypes.func
  }


export default GetTeam;
