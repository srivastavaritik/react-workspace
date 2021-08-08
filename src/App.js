import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state ={
    persons:[
      {name: 'amul', age: '20'},
      {name: 'sudha', age: '27'},
      {name: 'ananda', age: '45'},
      {name: 'asan', age: '30'}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, This is a React App.</h1>
        <p style={{color: 'green'}}>This is really working.</p>
        <button>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Hobbies: Moz krna</Person>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
      </div>
    );
  }
}

export default App;
