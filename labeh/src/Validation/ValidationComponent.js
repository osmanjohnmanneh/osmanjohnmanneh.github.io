import React from 'react'
import styled from 'styled-components'

const SytleDiv = styled.div`
    font-weight: bold;
    font: italic small-caps bold 12px/30px Georgia, serif;
`;

const validationComponent = (props) => {
    let text = "Text long enough"
    if (props.text.length == 0 ) {
        text = "Enter a text"
    }
    if(props.text.length <= 5){
        text = "Text too short"
    }
    return (
        <SytleDiv>
        <p>{props.text}</p>
            <p>{text}</p>
        </SytleDiv>
    )
}

export default validationComponent