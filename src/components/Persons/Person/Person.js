import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
        [
        /* this.props.name kiedy używamy klasy jako podstawy komponentu */
        <p key ='i1' onClick={this.props.click}>
          Oto jestę {this.props.name} i mam {this.props.age} lat
        </p>,
        <p key ='i2'>{this.props.children}</p>,
        <input
            key ='i3'
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
        ]
    );
  }
}

export default Person;
