import React from 'react';
import PropTypes from 'prop-types';

// File imports
import GetPlayerInput from './GetPlayerInput';

const GetTeam = props =>

  <div className="team-container">
    <h2>Players you receive</h2>
    <GetPlayerInput
      players={ props.players }
      addGetPlayer={ props.addGetPlayer }
      addPlayerToState={ props.addPlayerToState }
      isLoading={ props.isLoading }
      setLoadingState={ this.setLoadingState } />
  </div>;

  GetTeam.propTypes = {
    players: PropTypes.array,
    addGetPlayer: PropTypes.func,
    addPlayerToState: PropTypes.func,
    isLoading: PropTypes.bool.isRequired,
    setLoadingState: PropTypes.func.isRequired
  }


export default GetTeam;
