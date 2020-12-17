import React, { Component } from 'react';
import Tomo from './Tomo';

class App extends Component {
  state = {
    people : [
      { name: 'Tomo', age: 35, hobby: 'wine', id: 1 },
      { name: 'Mia', age: 1, hobby: 'ball', id: 2 },
      { name: 'Keiko', age: 35, hobby: 'movies', id: 3 }
    ]
  }
  render() {
    return(
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome!</p>
        <Tomo people={ this.state.people } /> 
      </div>
    );
  }
}

export default App;
