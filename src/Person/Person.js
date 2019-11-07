import React from 'react'
import './Person.css'


const person = ( props ) => {
    return(
    <div className="Person">
        {/* this.props.name kiedy używamy klasy jako podstawy komponentu */}
        <p onClick={props.click}>Oto jestę {props.name} i mam {props.age} lat</p>
        <a>{props.children}</a>
        <input type='text' onChange={props.changed} value={props.name}/>
    </div>
    )
}

export default person