import React from 'react'
import classes from './Person.css'


const person = (props) => {
    return (
            <div className={classes.Person}>
                {/* this.props.name kiedy używamy klasy jako podstawy komponentu */}
                <p onClick={props.click}>Oto jestę {props.name} i mam {props.age} lat</p>
                <p>{props.children}</p>
                <input type='text' onChange={props.changed} value={props.name} />
            </div>
    )
}

export default person