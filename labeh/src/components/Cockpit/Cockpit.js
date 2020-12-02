import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
    // using CSS MODULES for with Classes as properties
    let classAssign = []
    let BtnClasses = ""
    if(props.showPerson){
        BtnClasses = classes.Red
    }

    if (props.person.length <= 2) {
      classAssign.push(classes.red)
    }
    if (props.person.length <= 1) {
      classAssign.push(classes.bold)
    }
    return (
        <div className={classes.Cockpit}>


            <p className={classAssign.join(' ')}>My app works!</p>
            {/* here we add the btn classe array and
        join() it so that we can access the Properties 
        in the CSS like red bold */}
            {/* here we change from BtnClasses.join(' ')
        to just BtnClasses  */}
            <button className={BtnClasses}
                // alt={this.state.showPerson}
                onClick={props.togglePerson}
            >Toggle
          </button>
        </div>
    )
}
export default cockpit