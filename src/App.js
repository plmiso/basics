import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons:[
      {name:'Milosz', age:29},
      {name:'Marek', age: 28}
    ]
  }

  switchNameHandler = () => {
    this.setState({persons:[
      {name:'Jedi', age:29},
      {name:'Marek', age: 29}
    ]
  })
  }

  render() {
    return (
      <div className="App">
         <h1>Siema</h1>
         <button onClick={this.switchNameHandler}>Zmien imie</button>
         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> i to ta sama osoba</Person>
      </div>
    );
  }
}

export default App;
