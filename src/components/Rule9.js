import React, { Component } from 'react'
import Display from './Display'
import Rule10 from './Rule10'

class Rule9 extends Component {
  render() {
    if (this.props.password){
      let adds = 0 
      this.props.password.match(/\d/g).forEach(element => adds+=parseInt(element))
      const result =  adds===25? 
      <>
      <Rule10 password={this.props.password} />
      <Display group='pass' name='Rule 9'>Equal to 25</Display>
      </> : 
      <Display group='fail' name='Rule 9'>Not Equal to 25</Display>
      return result
    }
}
}
export default Rule9