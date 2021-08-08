import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, This is a React App.</h1>
        <Person name="amul" age="20" />
        <Person name="sudha" age="27"/>
        <Person name="ananda" age="45">Hobbies: Moz krna</Person>
        <Person name="asan" age="30"/>
      </div>
    );
  }
}

export default App;
