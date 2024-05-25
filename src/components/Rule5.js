import React, { Component } from 'react'
import Display from './Display'
import Rule6 from './Rule6'

class Rule5 extends Component {
  render() {
    if (this.props.password){
      const result =  this.props.password.length>=8 ? 
      <>
      <Rule6 password={this.props.password} />
      <Display group='pass' name='Rule 5'>More than 8</Display>
      </> : 
      <Display group='fail' name='Rule 5'>less than 8</Display>
      return result
    }
}
}
export default Rule5


