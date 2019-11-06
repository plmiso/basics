import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState ] = useState({
    persons:[
      {name:'Milosz', age:29},
      {name:'Marek', age: 28}
    ],
  })
  //as hooks dont merge but OVVERRIDE state, we need to diverse data to two states
  const [otherState, setOtherState] = useState("some other state")

  const switchNameHandler = () => {
    setPersonsState({persons:[
      {name:'Jedi', age:29},
      {name:'Marek', age: 29}
    ]
  })
  }

    return (
      <div className="App">
         <h1>Siema</h1>
         <button onClick={switchNameHandler}>Zmien imie</button>
         <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> i to ta sama osoba</Person>
      </div>
    );
  }


export default app;
