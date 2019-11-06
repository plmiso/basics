import React from 'react'


const person = (props) => {
    
    return(
    <div>
        {/* this.props.name kiedy używamy klasy jako podstawy komponentu */}
        <p>Oto jestę {props.name} i mam {props.age} lat</p>
        <a>{props.children}</a>
    </div>
    )
}

export default person