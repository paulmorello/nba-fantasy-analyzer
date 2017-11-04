import React, { Component } from 'react';
import './App.css';

// File imports
import GiveTeam from './GiveTeam';
import GetTeam from './GetTeam';
import Navbar from './Navbar';
import TradeSummary from './TradeSummary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <GiveTeam />
        <GetTeam />
        <TradeSummary />
      </div>
    );
  }
}

export default App;
