import React, { Component } from 'react'
import Display from './Display'
import Rule8 from './Rule8'

class Rule7 extends Component {
  render() {
    if (this.props.password){
      const result =  !this.props.password.match(/\d{2,}/g) ? 
      <>
      <Rule8 password={this.props.password} />
      <Display group='pass' name='Rule 7'>It doesn't contain atleast 2 Consecutive Digit Character</Display>
      </> :  
      <Display group='fail' name='Rule 7'>It must not contain atleast 2 Consecutive Digit Character</Display>
      return result
    }
}
}
export default Rule7

