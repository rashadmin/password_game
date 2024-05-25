import React, { Component } from 'react'
import Rule3 from './Rule3'
import Display from './Display'


class Rule2 extends Component {
  render() {
    if (this.props.password){
      const result =  this.props.password.match(/[A-Z].*[A-Z]+/g) ? 
      <>
       <Rule3 password={this.props.password} />
      <Display group = 'pass' name='Rule 2'>It Contains atleast 2 Upper Case Character</Display>  
      </> : 
      <Display group ='fail' name='Rule 2'>It must contain atleast 2 Upper Case Character</Display>
      return(result)
    }
}
}
export default Rule2

