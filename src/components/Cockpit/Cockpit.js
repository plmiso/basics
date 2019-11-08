import React, {useEffect, useRef} from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
    const toggleBtnRef = useRef(null)

    useEffect(() =>{
        //odpala się za każdym razem kiedy komponent jest używany
        //spoko do http request
        console.log('[Cockpit.js] useEffect')
        // fake http
        // setTimeout(() => {
        //     alert('Saved data to cloud!')
        // }, 1000)
        toggleBtnRef.current.click()
        return () =>{
            
            //zwracanie pustej funkcji w useEffect pozwala na cleanup 
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    }, [])

    useEffect(() =>{
        console.log('[Cockpit.js] 2nd useEffect')
        return () =>{
            //zwracanie pustej funkcji w useEffect pozwala na cleanup 
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
        }
    })
    
    let assignedClasses = []
    let btnClass =''
    
    if (props.showPersons){
        btnClass = classes.Red
    }
    if(props.personsLength <=2){
      assignedClasses.push(classes.red)
    }
    if(props.personsLength <=1){
      assignedClasses.push(classes.bold)
    }

    return (
        <div className = {classes.Cockpit}>
            <h1>Siema</h1>
            <p className={assignedClasses.join(' ')}>Działa</p>
            <button ref={toggleBtnRef}
            className={btnClass}
            onClick={props.clicked}>Toggle people</button>
        </div>
    )
}

export default React.memo(cockpit)