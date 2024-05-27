import React, { Component } from 'react'
import Display from './Display'

class Rule9 extends Component {
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
      <Display group='pass' name='Rule 9'>It is Not Among the Common Passwords</Display>
      </> :  
      <Display group='fail' name='Rule 9'>It is Among the Common Passwords</Display>
      return result
    }
}
}
export default Rule9





