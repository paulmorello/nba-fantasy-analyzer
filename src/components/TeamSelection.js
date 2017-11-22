import React from 'react';
import PropTypes from 'prop-types';

// File imports
import GiveTeam from './GiveTeam';
import GetTeam from './GetTeam';


const TeamSelection = props =>

  <div className="team-selection-container">
    <GiveTeam
      players={ props.players }
      addGivePlayer={ props.addGivePlayer } />
    <GetTeam
      players={ props.players }
      addGetPlayer={ props.addGetPlayer }
      getPlayerStats={ props.getPlayerStats } />
  </div>;

  TeamSelection.propTypes = {
    players: PropTypes.array.isRequired,
    addGivePlayer: PropTypes.func.isRequired,
    addGetPlayer: PropTypes.func.isRequired,
    getPlayerStats: PropTypes.func.isRequired
  }

export default TeamSelection;
