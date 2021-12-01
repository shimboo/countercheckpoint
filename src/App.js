import React, { Component } from "react";
import './App.css'
export default class App extends Component {
  constructor() {
    super();
    this.state = { counter: 0 }
  }
  increse = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  decrese = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1
      })
    }
  }
  reset = () => {
    this.setState({
      counter: 0
    })
  }
  render() {
    return (
      <div className='card'>
        <h3>PRESS IT NOW</h3>
        <img className="press" src='https://media1.giphy.com/media/LoUmOTtGzs3A8WggVx/giphy.gif' alt='press' />
        <p> {this.state.counter} </p>
        <button onClick={this.increse}  >+</button>
        <button onClick={this.decrese}>-</button>
        <button onClick={this.reset}>reset</button>
      </div>
    )
  }
}