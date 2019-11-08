import React, {useEffect} from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
    useEffect(() =>{
        //odpala się za każdym razem kiedy komponent jest używany
        //spoko do http request
        console.log('[Cockpit.js] useEffect')
    })
    
    let assignedClasses = []
    let btnClass =''
    
    if (props.showPersons){
        btnClass = classes.Red
    }
    if(props.persons.length <=2){
      assignedClasses.push(classes.red)
    }
    if(props.persons.length <=1){
      assignedClasses.push(classes.bold)
    }

    return (
        <div className = {classes.Cockpit}>
            <h1>Siema</h1>
            <p className={assignedClasses.join(' ')}>Działa</p>
            <button 
            className={btnClass}
            onClick={props.clicked}>Toggle people</button>
        </div>
    )
}

export default cockpit