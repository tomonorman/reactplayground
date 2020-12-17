import React, { Component } from 'react';

class Tomo extends Component {
  render() {
    const { people } = this.props;
    const peopleList = people.map(person => {
      return(
        <div className="tomo" key={person.id}>
          <div>Name: {person.name}</div>
          <div>Age: {person.age}</div>
          <div>Hobby: {person.hobby}</div>
        </div>
      );
    })
    // Output to App.js
    return(
      <div className="people-list">
        { peopleList } 
      </div>
    );
  }
}

export default Tomo;