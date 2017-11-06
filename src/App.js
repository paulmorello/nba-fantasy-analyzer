import React, { Component } from 'react';
import './App.css';

// File imports
import Navbar from './components/Navbar';
import TeamSelection from './components/TeamSelection';
import TradeSummary from './components/TradeSummary';

class App extends Component {

  state = {
    players: [
      {
        name: 'LeBron James',
        rating: 99,
        toGive: false,
        toGet: true
      },{
        name: 'Kristaps Porzingis',
        rating: 99,
        toGive: false,
        toGet: false
      },{
        name: 'Kawhi Leonard',
        rating: 99,
        toGive: true,
        toGet: false
      },{
        name: 'Kevin Durant',
        rating: 99,
        toGive: false,
        toGet: false
      },{
        name: 'Steph Curry',
        rating: 99,
        toGive: false,
        toGet: false
      },{
        name: 'James Harden',
        rating: 99,
        toGive: false,
        toGet: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <TeamSelection
          players={ this.state.players } />
        <TradeSummary
          players={ this.state.players } />
      </div>
    );
  }
}

export default App;
