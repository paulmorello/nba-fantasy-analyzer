import React from 'react';
import PropTypes from 'prop-types';

// File imports
import GivePlayerInput from './GivePlayerInput';

const GiveTeam = props =>

  <div className="team-container">
    <h2>Players you give up</h2>
    <GivePlayerInput
      players={ props.players }
      addGivePlayer={ props.addGivePlayer }
      addPlayerToState={ props.addPlayerToState } />
  </div>;

  GiveTeam.propTypes = {
    players: PropTypes.array.isRequired,
    addGivePlayer: PropTypes.func
  }


export default GiveTeam;
