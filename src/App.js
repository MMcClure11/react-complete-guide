import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = () => {

  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ] 
  });

  const switchNameHandler = () => {
    // console.log('Was clicked!')
    setPersonsState({ 
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ] 
      //note: hooks do not add to existing state, it overwrites it
     });
  };
 
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={ switchNameHandler }>Switch Name</button>
      <Person name={ personsState.persons[0].name } age={ personsState.persons[0].age }/>
      <Person name={ personsState.persons[1].name } age={ personsState.persons[1].age }>My hobbies: Racing</Person>
      <Person name={ personsState.persons[2].name }  age={ personsState.persons[2].age } />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
}

export default app;

// state = {
//   persons: [
//     { name: 'Max', age: 28 },
//     { name: 'Manu', age: 29 },
//     { name: 'Stephanie', age: 26 }
//   ] 
// }

// switchNameHandler = () => {
//   // console.log('Was clicked!')
//   this.setState({ 
//     persons: [
//       { name: 'Maximilian', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 27 }
//     ] 
//    });
// }
