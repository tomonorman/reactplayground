import React, { Component } from 'react';
import Tomo from './Tomo';

class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome!</p>
        <Tomo name="Tomo" age="35" hobby="wine" />
        <Tomo name="Mia" age="1" hobby="ball" />
      </div>
    );
  }
}

export default App;
