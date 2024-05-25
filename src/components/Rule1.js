import React, { Component } from 'react'
import Rule2 from './Rule2'
import Display from './Display'


class Rule1 extends Component {
  render() {
    if (this.props.password){
      const result =  this.props.password.match(/[a-z].*[a-z]/g) ? 
      <>
      <Rule2 password={this.props.password} />
      <Display group = 'pass' name='Rule 1'>It Contains atleast 2 Lower Character</Display>  
      </> : 
      <Display group ='fail' name='Rule 1'>It must contain atleast 2 Lower Character</Display>
      return(result)
    }
}
}
export default Rule1

