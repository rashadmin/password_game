import React, { Component } from 'react'
import Display from './Display'
import Rule5 from './Rule5'

class Rule4 extends Component {
  render() {
    if (this.props.password){
      const result =  this.props.password.match(/[\W_].*[\W_]/g) ? 
      <>
      <Rule5 password={this.props.password} />
      <Display group='pass' name='Rule 4'>It Contains atleast two Special Character</Display>
      </> :  
      <Display group='fail' name='Rule 4'>It must contain Special Character</Display>
      return result
    }
}
}
export default Rule4

