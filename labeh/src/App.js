import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {
   state = {
    name:"john"
   }
  render() {
    return (
      <div className="App">
        <h1>Hi from React</h1>
        <Person name={this.state.name}/>
      </div>
    );
  }
}

export default App;
