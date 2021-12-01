import React, { Component } from "react";

export default class App extends Component {
    constructor() {
        super();
        this.state = { counter: 0 }
    }
    increse = () => { this.setState({ counter: this.state.counter + 1 }) }
    decrese = () => { this.setState({ counter: this.state.counter - 1 }) }
    muftah = () => { this.setState({ counter: 0 }) }
    render() {
        return (
            <div>
                <button onClick={this.increse}  >+</button>
                <button onClick={this.decrese}>-</button>
                <p> {this.state.counter} </p>
                <button onClick={this.muftah}>reset</button>
            </div>
        )
    }
}