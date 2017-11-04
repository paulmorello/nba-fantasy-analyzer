import React, { Component } from 'react';
import './App.css';

// File imports
import GiveTeam from './GiveTeam';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <GiveTeam />
      </div>
    );
  }
}

export default App;
