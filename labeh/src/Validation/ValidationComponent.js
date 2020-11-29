import React from 'react'

const validationComponent = (props) => {
    let text = "Text long enough"
    if (props.text.length == 0 ) {
        text = "Enter a text"
    }else{
        text = "Text too short"
    }
    return (
        <div>
            <p>{props.text}</p>
            <p>{text}</p>
        </div>
    )
}

export default validationComponent