import React, { Component } from 'react';
import './App.css';

// File imports
import Team from './Team';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>NBA Trade Analyzer</h1>
        <Team />
        <Team />

      </div>
    );
  }
}

export default App;
