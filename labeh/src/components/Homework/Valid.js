import React,{useContext}from 'react'

import Validation from '../Homework/Validation/ValidationComponent'


const valid = (props) => {
    return (
        <div>
            <input onChange={props.TextLength} value={props.input} />
            <Validation
                len={props.len}
                text={props.input} />
        </div>
    )
}
export default valid