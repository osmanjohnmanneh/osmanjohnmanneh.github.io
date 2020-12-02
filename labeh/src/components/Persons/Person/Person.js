import React from 'react';
import classes from './Person.css'

import styled from 'styled-components'
// const StyleDiv = styled.div`
//         width: 60%;
//         margin:16px auto;
//         border: 1px solid #eee;
//         box-shadow: 0 2px 3px #ccc;
//         padding:16px;
//         text-align: center;
//         cursor:pointer;
//         '@media (min-width:500px': {
//             width: '450px'
//         }
// `;
const person = (props) => {
    return (
        // <div className="Person" style={style}>
        // <StyleDiv>
        <div className={classes.Person}>
            <p onClick={props.delete}>
            {props.name}</p>
            <p>{props.age}</p>
            <input type="text" onChange={props.changeName} value={props.name} />
            <br /><br />
            <input type="text" onChange={props.changeAge} value={props.age} />
        </div>
        // </StyleDiv>
        //  </div>
    );
}

export default person;