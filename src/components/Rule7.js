import React, { Component } from 'react'
import Display from './Display'
import Rule8 from './Rule8'

class Rule7 extends Component {
  render() {
    if (this.props.password){
      const result =  !this.props.password.match(/\d{2,}/g) ? 
      <>
      <Rule8 password={this.props.password} />
      <Display group='pass' name='Rule 7'>Contains Consecutive Digit Character</Display>
      </> :  
      <Display group='fail' name='Rule 7'>Doesn't contain Consecutive Digit Character</Display>
      return result
    }
}
}
export default Rule7

