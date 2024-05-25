import React, { Component } from 'react'
import './style.css'

class Display extends Component {
  render() {
        return (
        <div className={`text-container ${this.props.group}`}>
            <h3>{this.props.name}</h3>
            <p>{this.props.children}</p>
        </div>
               )
    }
    
  }


export default Display