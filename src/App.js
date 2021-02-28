import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const app = () => {

  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ] 
  });

  const switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    setPersonsState({ 
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ] 
      //note: hooks do not add to existing state, it overwrites it
     });
  };
 
  const nameChangedHandler = (event) => {
    setPersonsState({ 
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ] 
     })
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <UserInput />
      <UserOutput />      
      <UserOutput />
      <UserOutput />
      <button 
        style={ style }
        onClick={ () => switchNameHandler('Maximilian!!') }>Switch Name</button>
      {/* the above anonymous arrow function can be inefficient */}
      <Person 
        name={ personsState.persons[0].name } 
        age={ personsState.persons[0].age }/>
      <Person 
        name={ personsState.persons[1].name } 
        age={ personsState.persons[1].age }
        click={ switchNameHandler.bind(this, 'MAX!') }
        changed={ nameChangedHandler }>My hobbies: Racing</Person>
        {/* recommend using .bind this to improbe performance */}
      <Person 
        name={ personsState.persons[2].name }  
        age={ personsState.persons[2].age } />
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
