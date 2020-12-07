import React, { useEffect, useRef,useContext } from 'react'
import classes from './Cockpit.css'

import AuthContext from '../../context-auth/auth-context'

const cockpit = (props) => {
    const variableClickRef = useRef()

    const authContext = useContext(AuthContext)
    useEffect(() => {
        variableClickRef.current.focus()
    }, [])
    useEffect(() => {
        console.log("[Cockpit.js] rendering")
    },[])
    // using CSS MODULES for with Classes as properties
    let classAssign = []
    let BtnClasses = ""
    if (props.showPerson) {
        BtnClasses = classes.Red
    }

    if (props.personLength <= 2) {
        classAssign.push(classes.red)
    }
    if (props.personLength <= 1) {
        classAssign.push(classes.bold)
    }
    return (
        <div className={classes.Cockpit}>
            <p className={classAssign.join(' ')}>{props.title}</p>
            {/* here we add the btn classe array and
        join() it so that we can access the Properties 
        in the CSS like red bold */}
            {/* here we change from BtnClasses.join(' ')
        to just BtnClasses  */}
            <button className={BtnClasses}
                // alt={this.state.showPerson}
                onClick={props.togglePerson}
                ref={variableClickRef}
            >Toggle
          </button>
            {/* <AuthContext.Consumer> */}
                {/* { context => <button onClick={context.login}>Login</button>
                } */}
                {<button onClick = {authContext.login}>Login</button>}
            {/* </AuthContext.Consumer> */}
        </div>
    )
}
export default React.memo(cockpit)