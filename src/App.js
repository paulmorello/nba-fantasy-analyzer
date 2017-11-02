import React, { Component } from 'react';
import './App.css';

// File imports
import Team from './Team';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Team />
        <Team />
      </div>
    );
  }
}

export default App;
