import React,{useEffect} from 'react'
import styled from 'styled-components'

const SytleDiv = styled.div`
    font-weight: bold;
    font: italic small-caps bold 12px/30px Georgia, serif;
`;

const validationComponent = (props) => {

    useEffect(()=>{
        return ()=>{
            console.log("[ValidationComponent.js] cleanup")
        }
    },[])
    
    let t = "Text long enough"
    if (props.text.length === 0 ) {
        t = "Enter a text"
    }
    if(props.text.length <= 5){
        t = "Text too short"
    }
    return (
        <SytleDiv>
        <p>{props.text}</p>
            <p>{t}</p>
        </SytleDiv>
    )
}

export default validationComponent