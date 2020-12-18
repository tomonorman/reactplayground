import React, { Component } from 'react';
import People from './People';
import AddPerson from './AddPerson';

class App extends Component {
  state = {
    people : [
      { name: 'Tomo', age: 35, hobby: 'wine', id: 1 },
      { name: 'Mia', age: 1, hobby: 'ball', id: 2 },
      { name: 'Keiko', age: 35, hobby: 'movies', id: 3 }
    ]
  }

  addPerson = (person) => {
    person.id = Math.random();
    // Copy the original array, and add new person to it
    let people = [...this.state.people, person];
    this.setState({
      people: people
    })
  }

  deletePerson = (id) => {
    let people = this.state.people.filter(person => {
      return person.id !== id
    });
    this.setState({
      people: people
    })
  }

  render() {
    return(
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome!</p>
        <People deletePerson={ this.deletePerson } people={ this.state.people } /> 
        <AddPerson addPerson={ this.addPerson } />
      </div>
    );
  }
}

export default App;
