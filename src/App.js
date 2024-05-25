import './App.css';
import React, { Component } from 'react';
import Rule1 from './components/Rule1';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       password:'',
    }
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <label>Enter Password</label>
          <input value={this.state.password} onChange={(e) => this.setState({password:e.target.value})}></input>
          <div>
          <Rule1 password={this.state.password} name='rule1' />
          </div>
          <div>
          </div>
        </div>
        
    </div>
    )
  }
}

export default App;

