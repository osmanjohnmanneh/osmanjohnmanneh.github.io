import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PersonComponent from './Person/Person'
import Person from './Person/Person'

class Persons extends Component {
    componentDidUpdate(){
        console.log('updated after getting from state')
    }
    // componentWillUnmount(){
    //     console.log("[App.js] unmount ")
    //   }
    
    render() {
        console.log('[Persons.js] rendering')
        return (
            this.props.leute.map((p, index) => {
                return (

                    <div>
                        <PersonComponent
                            name={p.name}
                            age={p.age}
                            key={p.Id}
                            delete={() => this.props.deletePerson(index)}
                            changeName={(e) => this.props.changePersonName(e, p.Id)}
                            changeAge={(e) => this.props.changePersonAge(e, p.Id)}
                        />
                    </div>)
            })
        )
    }
}

Person.prototype = {
    name:PropTypes.string,
    age: PropTypes.number,
    changeName: PropTypes.func
}
export default Persons