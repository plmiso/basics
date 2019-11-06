import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {name:'Milosz', age:29},
      {name:'Marek', age: 28},
      {name: 'Monika', age: 25}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons:[
      {name:newName, age:29},
      {name:'Marek', age: 29},
      {name: 'Monika', age: 25}
    ]
  }
  )}

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name: 'Milosz', age:29},
        {name:event.target.value, age: 28},
        {name: 'Monika', age: 25}
      ]
    })
  }

  render() {
    return (
      <div className="App">
         <h1>Siema</h1>
         <button onClick={() => this.switchNameHandler("Jedi")}>Zmien imie</button>
         <Person 
         name={this.state.persons[0].name} 
         age={this.state.persons[0].age}
         click={this.switchNameHandler.bind(this, "Sith")}/>
         <Person 
         name={this.state.persons[1].name} 
         age={this.state.persons[1].age}
         changed={this.nameChangedHandler}> i to ta sama osoba</Person>
          <Person 
         name={this.state.persons[2].name} 
         age={this.state.persons[2].age}> i to ta sama osoba</Person>
      </div>
    );
  }
}

export default App;
