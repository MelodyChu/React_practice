import React, { Component } from 'react';

class ButtonExample extends Component {
    constructor(props) {
        super(props)
// need constuctor when setting something in the state
//default state always set in constructor
        this.state = {
            counter: 0
        }
    }
    incrementCounter() {
        console.log('increment')
        this.setState({ counter: this.state.counter + 1 }) // set state can take in either object or a function?
        // this.state.counter += 1 CAN'T DO
    }
    render() { //every time set state is called, render will re-render each time
        return (
            <div>
                <button onClick={() => this.incrementCounter()}>click me</button> // why does onClick={this.incrementCounter} not work?
                <br />
                {this.state.counter}
            </div>
        )
    }
}

export default ButtonExample