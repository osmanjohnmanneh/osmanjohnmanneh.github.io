import React, { Component, Fragment } from 'react';
import classes from './Person.css'
import PropTypes from 'prop-types'

import Aux from '../../../HOC/Aux'
import withClass from '../../../HOC/withClass'
import styled from 'styled-components'

import AuthContext from '../../../context-auth/auth-context'
// const StyleDiv = styled.div`
//         width: 60%;
//         margin:16px auto;
//         border: 1px solid #eee;
//         box-shadow: 0 2px 3px #ccc;
//         padding:16px;
//         text-align: center;
//         cursor:pointer;
//         '@media (min-width:500px': {
//             width: '450px'
//         }
// `;
class Person extends Component {
    constructor(props) {
        super(props);
        this.variableInputRef = React.createRef();
    }

    static contextType = AuthContext
    componentDidUpdate() {
        console.log('updated before sending to state')
    }
    componentDidMount() {
        //Older version
        //   this.variableNameInput.focus() 

        // Newer Version 
        this.variableInputRef.current.focus()

    }

    render() {
        console.log('[person.js] rendering')
        return (
            // <div className="Person" style={style}>
            // <StyleDiv>
            // <div className={classes.Person}>
            <Aux>
                {/* <AuthContext.Consumer>
                    {context => context.authentication ? <p>Authenticated</p> : <p>Please Log in </p>}
                </AuthContext.Consumer> */}
                    {this.context.authentication ? <p>Authenticated</p> : <p>Please Log in </p>}
                <p onClick={this.props.delete}>
                    {this.props.name}</p>
                <p>{this.props.age}</p>
                <input type="text"
                    // ref={(inp) => {this.variableNameInput = inp}}
                    ref={this.variableInputRef}
                    onChange={this.props.changeName}
                    value={this.props.name} />
                <br /><br />
                <input type="text"
                    onChange={this.props.changeAge}
                    value={this.props.age} />
            </Aux>

            //  </div>
            // </StyleDiv>
            //  </div>
        );
    }
}


export default withClass(Person, classes.Person);