import React from 'react'
import styled from 'styled-components'

const SytleButton = styled.button`
    display: inline-block;
    padding: 16px;
    text-align: center;
    margin: 16px;
    border: 2px solid black;

    &:hover{
        background-color: pink;
        cursor:pointer;
    }
`;

const charComponent = (props) => {
    
    return (
    <SytleButton>
        <p onClick={props.delete}>{props.charVal}</p>
    </SytleButton>
)
}

export default charComponent