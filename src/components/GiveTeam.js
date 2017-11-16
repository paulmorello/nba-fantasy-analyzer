import React from 'react';
import PropTypes from 'prop-types';

// File imports
import PlayerInput from './PlayerInput';

const GiveTeam = props =>

  <div className="team-container">
    <h2>Players you give up</h2>
    <PlayerInput
      players={ props.players }
      addGivePlayer={ props.addGivePlayer } />
  </div>;

  GiveTeam.propTypes = {
    players: PropTypes.array.isRequired,
    addGivePlayer: PropTypes.func
  }


export default GiveTeam;
