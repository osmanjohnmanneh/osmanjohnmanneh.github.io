import React from 'react'
import CharComponent from '../Homework/Validation/CharComponent'




const charvalues = (props)=>{

    return (
        props.input
        .split("")
        .filter(i => i !== " ")
        .map((i, k) => {
          return (
            <CharComponent
              charVal={i}
              key={k}
              delete={(event) => props.deleteChar(event, k)} />
          )
        })
    )
}
export default charvalues