import React, { Component } from 'react'
import Display from './Display'
import Rule9 from './Rule9'

class Rule8 extends Component {
  render() {
    if (this.props.password){        
      const result =  !this.props.password.match(/([A-Za-z])\1/gi) ? 
      <>
      <Rule9 password={this.props.password} />
      <Display group='pass' name='Rule 8'>Contains Consecutive Character</Display>
      </> :  
      <Display group='fail' name='Rule 8'>Doesn't contain Consecutive Character</Display>
      return result
    }
}
}
export default Rule8

