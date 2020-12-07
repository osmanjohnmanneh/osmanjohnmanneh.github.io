import React, { Component,Fragment } from 'react';
import classes from './App.css';


import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import CharValue from '../components/Homework/CharValues'
import Valid from '../components/Homework/Valid'

import AuthContext from '../context-auth/auth-context'
import TextContext from '../context-auth/text-context'


//app class 
class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] constructor runs')
  }
  static contextType = AuthContext

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }
  componentDidMount() {
      console.log('[App.js] componentDidmount')
  }

  state = {
    person: [
      { Id: 1, name: "John", age: 31 },
      { Id: 2, name: "Sarah", age: 36 },
      { Id: 3, name: "Emmanuel", age: 2.5 }
    ],
    showPerson: false,
    input: "",
    len: 0,
    counter: 0,
    authentication: false,
    labeh: "labeh_context"
  }
  //change user name on selected user
  changeName = (event, index) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.Id === index
    })
    const person = { ...this.state.person[personIndex] }
    person.name = event.target.value
    const persons = [...this.state.person]
    persons[personIndex] = person
    this.setState({ person: persons })
  }
  //not finished.. change Age on selected user
  changeAge = (e, id) => {
    const userIndex = this.state.person.findIndex(p => p.Id == id)
    const user = { ...this.state.person[userIndex] }
    user.age = e.target.value
    const updateUser = [...this.state.person]
    updateUser[userIndex] = user
    this.setState({ person: updateUser })
  }
  //button to toggle change state
  togglePerson = () => {
    this.setState({ showPerson: !this.state.showPerson })
  }
  //button to delete users
  deletePersonHandler = (index) => {
    const arr = [...this.state.person]
    arr.splice(index, 1)
    this.setState({ person: arr })
  }
  /////////////////////////////////////////////
  //How work to creat text lenght.
  TextLength = (event) => {
    let current = this.state.input.length + 1
    if (event.target.value > 7) {
      current = current - 2
    }
    this.state.input = event.target.value
    this.setState({
      len: current
    })
  }
  // Delete selected text (character)
  deleteChar = (event, key) => {
    const currentArray = [...this.state.input.split("")]
    currentArray.splice(key, 1)
    const jointArray = currentArray.join('')
    this.setState({
      input: jointArray
    })
  }
  /////////////////////////////////////////

  counterH = () => {
    this.setState((prev, props) => {
      return {
        counter: prev.counter + 1
      }
    })
  }
  authHandler = () => {
    this.setState({ authentication: !this.state.authentication })
  }
  // RENDER
  render() {
    console.log('[App.js] Render  first rendering...')
    // Condition upon Toggle clicked
    // to show users
    let people = null;
    if (this.state.showPerson) {
      people = (
        <Persons
          leute={this.state.person}
          deletePerson={this.deletePersonHandler}
          changePersonName={this.changeName}
          changePersonAge={this.changeAge}
        />
      )

      // Using CSS MODULE with classes as properties
      // this is option 1
      ///  BtnClasses.push(classes.Red)

      /// this is option 2 
    }

    ///////////////////////////////////////
    ///////////////////////////////////////
    // How work to show Character values
    //How work 

    let charValues = <CharValue
      input={this.state.input}
      deleteChar={this.deleteChar}
    />
    let validationInput = <Valid
      TextLength={this.TextLength}
      value={this.state.input}
      len={this.state.len}
      input={this.state.input} />
    ///////////////////////////////////////
    ///////////////////////////////////////
    return (
      // using CSS MODULES 
      <Fragment>
      <div className={classes.App}>
        <AuthContext.Provider value={{
          authentication: this.state.authentication,
          login: this.authHandler
        }}>
          <Cockpit
            title={this.props.AppTitle}
            personLength={this.state.person.length}
            showPerson={this.state.showPerson}
            togglePerson={this.togglePerson}
             />
          {people}
        </AuthContext.Provider>

        {validationInput}
        <TextContext.Provider value = {{labeh:this.state.labeh}}>
        {charValues}
        </TextContext.Provider>
        
      </div>
      </Fragment>

    )
  }
}

export default App;
