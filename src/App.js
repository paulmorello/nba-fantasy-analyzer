import React, { Component } from 'react';
import './App.css';

// File imports
import GiveTeam from './GiveTeam';
import GetTeam from './GetTeam';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <GiveTeam />
        <GetTeam />
      </div>
    );
  }
}

export default App;
