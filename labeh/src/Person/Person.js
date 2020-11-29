import React from 'react';
import './Person.css'

const person = (props) => {

    return (
        <div className="Person">
            <p onClick = {props.delete}>{props.name}</p>
            <p>{props.age}</p>
            <input type="text" onChange={props.changename} value={props.name} />
            <br /><br />
            <input type="text" onChange={props.changeage} />
        </div>
    );
}


export default person;