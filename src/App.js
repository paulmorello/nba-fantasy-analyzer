import React, { Component } from 'react';
import './App.css';

// File imports
import TeamSelection from './components/TeamSelection';
import Navbar from './components/Navbar';
import TradeSummary from './components/TradeSummary';

class App extends Component {

  state = {
    players: [
      {
        name: 'LeBron James',
        rating: 99,
        isSelected: true
      },{
        name: 'Kristaps Porzingis',
        rating: 99,
        isSelected: true
      },{
        name: 'Kawhi Leonard',
        rating: 99,
        isSelected: false
      },{
        name: 'Kevin Durant',
        rating: 99,
        isSelected: true
      },{
        name: 'Steph Curry',
        rating: 99,
        isSelected: false
      },{
        name: 'James Harden',
        rating: 99,
        isSelected: false
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
