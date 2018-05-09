import React, { Component } from 'react';


class Calculator1 extends Component {
    constructor(props) {
        super(props);
        this.state = {expression: [], currentVal: 0, newItem: 0} //currentVal is new answer
    }

 
    handleChange(e) { // used to detect user input change on input field
        this.setState({ currentVal: e.target.value, newItem: e.target.value })
        // major issue with setting state after handle change
        // problem is that I need to set the initial currentVal (which is same as newItem)
        // but then I need update both curentVal & newItem, but i want to increment currentVal and set newItem as new

    } 

    addtoExpression() { // not sure where to pass this as props; want to do onChange for input field, but there's already onChange for handleChange
        let newExpression = this.state.expression;
        newExpression.concat([this.state.newItem]);
        this.setState({ expression: newExpression })
    }

    addNum() { // when '+' is clicked; newitem needs to update (handle change does this); then currentVal updates with new_item 
        console.log(this.state.currentVal)
        console.log(this.state.newItem)
        let newCurrent = parseInt(this.state.currentVal) + parseInt(this.state.newItem);
        let new_expression = this.state.expression.concat(['+'])
        console.log(newCurrent);
        this.setState({expression: new_expression, currentVal: newCurrent, newItem: ''})

    }

    subtractNum() {
        let newCurrent = parseInt(this.state.currentVal) - parseInt(this.state.newItem);
        console.log(newCurrent);
        let new_expression = this.state.expression.concat(['-'])
        this.setState({currentVal: newCurrent, newItem: ''})
    }

    multiplyNum() {
        let newCurrent = parseInt(this.state.currentVal) * parseInt(this.state.newItem);
        console.log(newCurrent);
        let new_expression = this.state.expression.concat(['*'])
        this.setState({currentVal: newCurrent, newItem: ''})
    }

    divideNum() {
        let newCurrent = parseInt(this.state.currentVal)/parseInt(this.state.newItem);
        console.log(newCurrent);
        let new_expression = this.state.expression.concat(['/'])
        this.setState({currentVal: newCurrent, newItem: ''})
    }

    clearUp() {
        this.setState({currentVal: 0, newItem: 0}) //back to original state
    }

    // thinking about having an equals method to iterate through items of the expression to come up with final answer
    // initially I hoped for using 'current Val' as my answer, but the user experience is super weird
    // equals() {
    //     }
    render() {
        return (
            <div>
                Expression: {this.state.expression}
                <br />
                <input type="text" onChange={(e)=> this.handleChange(e)} value={this.state.currentVal} />
                <button onClick={()=> this.addNum()}>'+'</button>
                <button onClick={()=> this.subtractNum()}>'-'</button>
                <button onClick={()=> this.multiplyNum()}>'*'</button>
                <button onClick={()=> this.divideNum()}>'/'</button>
                <button onClick={()=> this.clearUp()}>'Clear'</button>
                <br />
                Answer: {this.state.currentVal}
            </div>
            )
    }
}



export default Calculator1;

