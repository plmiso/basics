import React, { Component } from 'react';
import classes from './App.css';
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
    let btnClass = ''
    

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
      btnClass = classes.Red
     
    }
    //DYNAMICALLY ADDED STYLES
    let assignedClasses = []
    if(this.state.persons.length <=2){
      assignedClasses.push(classes.red)
    }
    if(this.state.persons.length <=1){
      assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.App}>
        <h1>Siema</h1>
        <p className={assignedClasses.join(' ')}>Działa</p>
        <button className={btnClass}
          onClick={this.togglePersonHandler}>Toggle people</button>
        {persons}
      </div>
    );
  }
}

export default App;
