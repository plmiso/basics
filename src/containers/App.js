import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from'../components/Cockpit/Cockpit'

class App extends Component {

  constructor(props){
    super(props)
    console.log('[App.js. constructor')
  }
  state = {
    persons: [
      {id: 'safreg' ,name: 'Milosz', age: 29},
      {id: 'as6d1q98', name: 'Marek', age: 28 },
      {id: 'sdfwa8', name: 'Monika', age: 25 }
    ],
    otherState: 'some other state',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Ap.js] shouldComponentUpdate')
    return true
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex,1)
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
   const personIndex = this.state.persons.findIndex(p =>{
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
    let persons = null;
    console.log('[App.js] render()')

    if (this.state.showPersons) {
      persons = (
         <Persons
         persons = {this.state.persons}
         clicked = {this.deletePersonHandler}
         changed = {this.nameChangedHandler}/>
      )}

    return (
        <div className={classes.App}>
        <button onClick={() => this.setState({showCockpit: !this.state.showCockpit})
        }>Cokcpit?</button>
        { this.state.showCockpit ? (
          <Cockpit 
          showPersons = {this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked = {this.togglePersonHandler}
          />
          ) : null}
        {persons}
      </div>
    );
  }
}

export default App;
