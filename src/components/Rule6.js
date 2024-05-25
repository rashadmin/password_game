import React, { Component } from 'react'
import Display from './Display'
import Rule7 from './Rule7'

class Rule6 extends Component {

  render() {
    if (this.props.password){
      const result =  (!this.props.password.match(/.*[a-zA-Z]{3,}.*/g))? 
      <>
      <Rule7 password={this.props.password} />
      <Display group='pass' name='Rule 6'>It Contains less than 3 Consecutive Lowercase or UpperCase Character</Display>
      </> :  
      <Display group='fail' name='Rule 6'>It Must not Contain More than 3 Consecutive Lowercase or UpperCase Character e.g acd,awe but as,ty.</Display>
      return result
    }
}
}
export default Rule6

//a7b#JK9'9'