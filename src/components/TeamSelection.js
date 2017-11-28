import React from 'react';
import PropTypes from 'prop-types';

// File imports
import GiveTeam from './GiveTeam';
import GetTeam from './GetTeam';


const TeamSelection = props =>

  <div className="team-selection-container">
    <GiveTeam
      players={ props.players }
      addGivePlayer={ props.addGivePlayer }
      addPlayerToState={ props.addPlayerToState } />
    <GetTeam
      players={ props.players }
      addGetPlayer={ props.addGetPlayer }
      addPlayerToState={ props.addPlayerToState } />
  </div>;

  TeamSelection.propTypes = {
    players: PropTypes.array.isRequired,
    addGivePlayer: PropTypes.func.isRequired,
    addGetPlayer: PropTypes.func.isRequired,
    addPlayerToState: PropTypes.func.isRequired
  }

export default TeamSelection;
