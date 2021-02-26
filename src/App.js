import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <Person name="Max" age="28"/>
       <Person name="Manu" age="29">My hobbies: Racing</Person>
       <Person name="Stephanie" age="31" />
      </div>
    );
    //The above is equivalent to the below, it is what React does for us, JSX is much easier to understand
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
