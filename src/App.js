import './App.css';
import React, { Component } from 'react';
import Rule1 from './components/Rule1';
import PasswordStrengthMeter from './components/StrengthChecker.js';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       test_password:'',
       password:'',
    }
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <div className='checker'>
            <h2>Password Checker</h2>
            <input value={this.state.test_password} onChange={(e) => this.setState({test_password:e.target.value})}></input>
            <PasswordStrengthMeter password={this.state.test_password} />
            <div className='info'>
                      <p>Also check out the following links to further test the strength of the password</p>
                      <a href='https://bitwarden.com/password-strength/'>BitWarden</a>
                      <a href='https://passwordmeter.com/'>Password Meter</a>
                      <a href='https://password.kaspersky.com/'>Kaspersky</a>
            </div>
            </div>
          <div>
          <hr></hr>
          <div className='game'>
          <h2>Password Game</h2>
          <label>Enter Password</label>
          <input value={this.state.password} onChange={(e) => this.setState({password:e.target.value})}></input>
          <div>
          </div>
          <Rule1 password={this.state.password} name='rule1' />
          </div>
          <div>
          </div>
          </div>
        </div>
        
    </div>
    )
  }
}

export default App;

