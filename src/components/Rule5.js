import React, { Component } from 'react'
import Display from './Display'
import Rule6 from './Rule6'

class Rule5 extends Component {
  render() {
    if (this.props.password){
      const result =  this.props.password.length>12 ? 
      <>
      <Rule6 password={this.props.password} />
      <Display group='pass' name='Rule 5'>The Length of the password must be more than 12</Display>
      </> : 
      <Display group='fail' name='Rule 5'>The Length of the password is less than or equal to 12</Display>
      return result
    }
}
}
export default Rule5


