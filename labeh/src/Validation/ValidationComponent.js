import React from 'react'

const validationComponent = (props) => {
    
    if(props.text.length<5){
        return (
            <div>
                <p>Text too short</p>
            </div>
        )
    }else if(props.text.length >5){
        return (
            <div>
                <p>Text too long</p>
            </div>
        )
    }
    return (
        <div>
            <p>{props.len}</p>
            <p>
                {

                    props.text

                }</p>
        </div>
    )
}

export default validationComponent