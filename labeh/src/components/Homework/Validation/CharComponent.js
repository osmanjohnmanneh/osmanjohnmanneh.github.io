import React,{useContext} from 'react'
import styled from 'styled-components'
import TextContext from '../../../context-auth/text-context'


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
    const textContext = useContext(TextContext)
    
    return (
    <SytleButton>
        <p onClick={props.delete}>{props.charVal}</p>
        <p>{textContext.labeh}</p>
    </SytleButton>
)
}

export default charComponent