import React, { Component } from 'react';
import './App.css';

// File imports
import GiveTeam from './components/GiveTeam';
import GetTeam from './components/GetTeam';
import Navbar from './components/Navbar';
import TradeSummary from './components/TradeSummary';

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
