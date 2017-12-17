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
      addPlayerToState={ props.addPlayerToState }
      isLoading={ props.isLoading }
      setLoadingState={ props.setLoadingState } />
  </div>;

  GiveTeam.propTypes = {
    players: PropTypes.array.isRequired,
    addGivePlayer: PropTypes.func,
    isLoading: PropTypes.bool.isRequired,
    setLoadingState: PropTypes.func.isRequired
  }


export default GiveTeam;
