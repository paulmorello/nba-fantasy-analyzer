import React from 'react';
import PropTypes from 'prop-types';

// File imports
import GiveTeam from './GiveTeam';
import GetTeam from './GetTeam';


const TeamSelection = props =>

  <div className="team-selection-container">
    <GiveTeam />
    <GetTeam />
  </div>;

  TeamSelection.propTypes = {
    players: PropTypes.array.isRequired
  }

export default TeamSelection;
