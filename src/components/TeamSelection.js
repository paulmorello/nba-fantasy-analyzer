import React from 'react';
import PropTypes from 'prop-types';

// File imports
import GiveTeam from './GiveTeam';
import GetTeam from './GetTeam';


const TeamSelection = props =>

  <div className="team-selection-container">
    <GiveTeam
      addGivePlayer={ props.addGivePlayer }/>
    <GetTeam />
  </div>;

  TeamSelection.propTypes = {
    players: PropTypes.array.isRequired,
    addGivePlayer: PropTypes.func.isRequired
  }

export default TeamSelection;
