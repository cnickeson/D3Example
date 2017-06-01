import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GraphContainer from './components/graph/graph-container.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Number of redirects from a page</h2>
        </div>
        <GraphContainer />
      </div>
    );
  }
}

export default App;
