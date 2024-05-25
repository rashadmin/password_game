import React, { Component } from 'react'
import Display from './Display'

class Rule10 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:false
    }
  }

  addtoState = () => {
    fetch('https://www.ncsc.gov.uk/static-assets/documents/PwnedPasswordsTop100k.json')
    .then(response=>response.json())
    .then(content=>this.setState({data:content.includes(this.props.password)}))
    // .catch(err=>console.log(err))
    }

  componentDidMount(){
    this.addtoState()
    }
  render() {
    if (this.props.password){        
      const result =  !this.state.data ? 
      <>
      <Display group='pass' name='Rule 10'>Not Among the Common Password</Display>
      </> :  
      <Display group='fail' name='Rule 10'>Among the Common Password</Display>
      return result
    }
}
}
export default Rule10





