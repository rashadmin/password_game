import React, { Component } from 'react'
import Rule4 from './Rule4'
import Display from './Display'


class Rule3 extends Component {
  render() {
    if (this.props.password){
      const result =  this.props.password.match(/[\d].*[\d]/g) ? 
      <>
      <Rule4 password={this.props.password} />
      <Display group = 'pass' name='Rule 3'>It Contains atleast 2 Digit Character</Display>  
      </> : 
      <Display group ='fail' name='Rule 3'>It must contain atleast 2 Digit Character</Display>
      return(result)
    }
}
}
export default Rule3

