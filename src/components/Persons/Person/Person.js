import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <div className={classes.Person}>
        {/* this.props.name kiedy używamy klasy jako podstawy komponentu */}
        <p onClick={this.props.click}>
          Oto jestę {this.props.name} i mam {this.props.age} lat
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
