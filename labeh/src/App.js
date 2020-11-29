import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
import Validation from './Validation/ValidationComponent'
import CharComponent from './Validation/CharComponent'

class App extends Component {
  state = {
    person: [
      { Id: 1, name: "John", age: 31 },
      { Id: 2, name: "Sarah", age: 36 },
      { Id: 3, name: "Emmanuel", age: 2.5 }
    ],
    showPerson: false,
    input: "",
    len: 0
  }

  changeName = (event, index) => {
    console.log(index)
    const personIndex = this.state.person.findIndex(p => {
      return p.Id === index
    })
    const person = { ...this.state.person[personIndex] }
    person.name = event.target.value
    const persons = [...this.state.person]
    persons[personIndex] = person
    this.setState({ person: persons })
  }

  changeAge = (e) => {
    this.setState({
      person: [
        { age: e.target.value }
      ]
    })
  }

  togglePerson = () => {
    this.setState({ showPerson: !this.state.showPerson })
  }



  deletePersonHandler = (index) => {
    const arr = [...this.state.person]
    arr.splice(index, 1)
    this.setState({ person: arr })
  }

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

  deleteChar = (event,key) => {
    console.log(key)
    const currentArray = [...this.state.input.split("")]
    currentArray.splice(key,1)
    const jointArray = currentArray.join('')
    this.setState({
      input: jointArray
    })
  }

  render() {
    const buttonStyle = {
      backgroundColor: '#03506f',
      border: '1px solid #eee',
      font: 'inherit',
      margin: ' 3px auto',
      padding: '16px',
      cursor: 'pointer'
    }

    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.person.map((p, index) => {
            return <Person
              delete={this.deletePersonHandler.bind(this, index)}
              name={p.name}
              age={p.age}
              key={p.Id}
              changename={(e) => this.changeName(e, p.Id)}
              changeage={this.changeAge}

            />
          })}
        </div>
      )
    }


    let charValues = (
      <div>
        {
          this.state.input
            .split("")
            .filter(i => i !== " ")
            .map((i, k) => {
              return (
                <CharComponent
                  charVal={i}
                  key ={k}
                  delete={(event)=>this.deleteChar(event,k)} />
              )
            })


        }
      </div>
    )
    let validationInput = (
      <div>
        <input onChange={this.TextLength} value ={this.state.input} />

        <Validation
          len={this.state.len}
          text={this.state.input} />
      </div>
    )
    return (
      <div className="App">

        {/* <button
          onClick={this.togglePerson}
          style={buttonStyle}
        >Toggle</button> */}
        {/* {person} */}
        {validationInput}
        {/* {this.state.showPerson ?  <div>
          <Person
            changename={this.changeName}
            changeage={this.changeAge}
            name={this.state.person[0].name}
            age={this.state.person[0].age}
          />
          <Person
            name2={this.state.person[1].name}
            age2={this.state.person[1].age}
          />
          <Person
            name3={this.state.person[2].name}
            age3={this.state.person[2].age}
          />
        </div> : null} */}
        {charValues}
      </div>
    )
  }
}

export default App;
