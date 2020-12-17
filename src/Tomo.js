import React, { Component } from 'react';

class Tomo extends Component {
  render() {
    const { name, age, hobby } = this.props;
    return(
      <div className="tomo">
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Hobby: {hobby}</div>
      </div>
    );
  }
}

export default Tomo;