import React, { Component } from 'react'
import icon from '../assets/images/webpack.png'

class App extends Component {
  render() {
    return (
      <div>
        <h1>React App boilerplate</h1>
        <img src={icon} />
        <small> From Turbo </small>
      </div>
    )
  }
}

export default App