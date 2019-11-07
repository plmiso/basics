import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    textLength: 0,
    charArray: null,
    textInput: ''
  }

  textLengthChangeHandler = (event) =>{
    const charArray = event.split('')
    const textLength = charArray.length
    this.setState({
      textLength: textLength,
      charArray: charArray,
      textInput: event
    })
  }

  deleteCharHandler = (indexToDelete) => {
    const newArray = [...this.state.charArray]
    newArray.splice(indexToDelete,1)
    this.textLengthChangeHandler(newArray.join(''))
  }

  
  render() {
    let characters = null;

    if(this.state.charArray){
      characters = (
      <div>
        {this.state.charArray.map((char, index) =>{
          return <CharComponent 
          character ={char}
          click = {() => {this.deleteCharHandler(index)}}
          key = {char + Math.random()}/>
        } )}
      </div>
      )
    }
    return (
      <div className="App">
        <input type='text' 
        onChange={(event) => this.textLengthChangeHandler(event.target.value)}
        value={this.state.textInput}/>
        <p>{this.state.textLength}</p>
        <ValidationComponent 
        textLength={this.state.textLength}/>
        {characters}
      </div>
    );
  }
}

export default App;
