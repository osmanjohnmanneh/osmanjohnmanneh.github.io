import React from 'react'

import PersonComponent from './Person/Person'

const persons = (props) => props.leute.map((p, index) => {
    return (
        <div>
            <PersonComponent
                name={p.name}
                age={p.age}
                key={p.Id}
                delete={()=>props.deletePerson(index)}
                changeName={(e) => props.changePersonName(e, p.Id)}
                changeAge={(e) => props.changePersonAge(e,p.Id)}
            />
        </div>)
})

export default persons