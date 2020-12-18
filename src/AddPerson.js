import React, { Component } from 'react';

class AddPerson extends Component {
  state = {
    name: null,
    age: null,
    hobby: null
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addPerson(this.state);
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" onChange={this.handleChange} />
          <label htmlFor="hobby">Hobby:</label>
          <input type="text" id="hobby" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddPerson;