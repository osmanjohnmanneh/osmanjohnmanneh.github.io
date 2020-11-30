import React from 'react';
import './Person.css'

import styled from 'styled-components'
const StyleDiv = styled.div`
        width: 60%;
        margin:16px auto;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding:16px;
        text-align: center;
        '@media (min-width:500px': {
            width: '450px'
        }
`;
const person = (props) => {
    return (
       // <div className="Person" style={style}>
       <StyleDiv>

            <p onClick={props.delete}>{props.name}</p>
            <p>{props.age}</p>
            <input type="text" onChange={props.changename} value={props.name} />
            <br /><br />
            <input type="text" onChange={props.changeage} />
       </StyleDiv>
      //  </div>
    );
}

export default person;