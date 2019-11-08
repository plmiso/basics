import React, { Component, Fragment} from "react";
import PropTypes from 'prop-types'

import classes from "./Person.css";
import withClass from '../../../hoc/withClass'
import AuthContext from '../../../context/auth-context'

class Person extends Component {
  constructor(props){
    super(props)
    this.inputElementRef = React.createRef()
  }

  static contextType = AuthContext

  componentDidMount(){
    // this.inputElement.focus()
    this.inputElementRef.current.focus()
    console.log(this.context.authenticated)
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
        //Fragment as wrapper
        <Fragment>
          {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p> }
        <p onClick={this.props.click}>
          Oto jestę {this.props.name} i mam {this.props.age} lat
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          //immediate creation of reference
          // ref={(inputEl) => {this.inputElement = inputEl} }
          //CONSTRUCTOR CREATION OF REFERENCE VIA REACT.createRef()
          ref = {this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
        </Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);
