import React from 'react';
import PropTypes from 'prop-types';

// File imports
import PlayerInput from './PlayerInput';

const GiveTeam = props =>

  <div className="team-container">
    <h2>Players you give up</h2>
    <PlayerInput
      addGivePlayer={ props.addGivePlayer } />
  </div>;

  GiveTeam.propTypes = {
    addGivePlayer: PropTypes.func.isRequired
  }


export default GiveTeam;
