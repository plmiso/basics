import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 'safreg' ,name: 'Milosz', age: 29},
      {id: 'as6d1q98', name: 'Marek', age: 28 },
      {id: 'sdfwa8', name: 'Monika', age: 25 }
    ],
    otherState: 'some other state',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex,1)
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
   const personIndex = this.state.persons.find(p =>{
     return p.id === id
   })
   const person = {...this.state.persons[personIndex]}
   person.name = event.target.value
   
   const persons = [...this.state.persons]
   persons[personIndex] = person

   this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            changed = {(event) => this.nameChangedHandler(event,person.id)} 
            name={person.name} 
            age={person.age}
            key={person.id} />
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Siema</h1>
        <button style={style}
          onClick={this.togglePersonHandler}>Toggle people</button>
        {persons}
      </div>
    );
  }
}

export default App;
