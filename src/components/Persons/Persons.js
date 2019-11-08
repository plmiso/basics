import React, { PureComponent } from 'react'
import Person from './Person/Person'

//Pure component automatically checks all props changed and updates only then
class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps')
    //     return state
    // }


    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Persons.js] shouldComponentUpdate')
    //     return nextProps.persons !== this.props.persons ||
    //             nextProps.clicked !== this.props.clicked ||
    //             nextProps.changed !== this.props.changed ? true : false
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
        //uzywane do wyczyszczenia danych przed zamknieciem komponentu
    }

    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    changed={(event) => this.props.changed(event, person.id)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                />
            )
        })
    }

}

export default Persons