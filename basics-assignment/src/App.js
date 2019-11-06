import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = { 
    developers: [
      {name: 'Jedi', language: "ALL OF THEM", experience: 99},
      {name: 'Miłosz', language: "java", experience: 2},
      {name: 'Marek', language: "js - react", experience: 1},
      {name: 'Mikołaj', language: "python", experience: 0.5},
    ]}
  
  

  addSomeExperienceHandler = (event) =>{
    console.log(this.state.developers)
    this.setState({
      developers: [
        {name: 'Jedi', language: "ALL OF THEM", experience: 99 + parseInt(event.target.value, 10)},
        {name: 'Miłosz', language: "java", experience: 2 + parseInt(event.target.value, 10)},
        {name: 'Marek', language: "js - react", experience: 1 + parseInt(event.target.value, 10)},
        {name: 'Mikołaj', language: "python", experience: 0.5 + parseInt(event.target.value, 10)}
      ]
    })
  }


  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Basics - assignment</h1>
        <UserInput 
        changed={this.addSomeExperienceHandler}></UserInput>
        <UserOutput style={style} 
        name={this.state.developers[0].name}
        language={this.state.developers[0].language}
        experience={this.state.developers[0].experience}
        >User Output Jeden</UserOutput>
        <UserOutput
          name={this.state.developers[1].name}
          language={this.state.developers[1].language}
          experience={this.state.developers[1].experience}
        >User Output Dwa</UserOutput>
        <UserOutput
          name={this.state.developers[2].name}
          language={this.state.developers[2].language}
          experience={this.state.developers[2].experience}
          >User Output Trzy</UserOutput>
        <UserOutput
        name={this.state.developers[3].name}
        language={this.state.developers[3].language}
        experience={this.state.developers[3].experience}
        >User Output Cztery</UserOutput>
      </div>
    );
  }
}

export default App;
