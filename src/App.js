
// TYPO TYPO TYPO
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './ShoppingList'
import ButtonExample from './ButtonExample'
import Calculator1 from './calculator_v1'
// class app is the parent component of shoppinnglist & button; can assign props to child classes
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ['apple', 'banana', 'cheese'],
      inputval: ''
    };
    // this.addNewItem = this.addNewItem.bind(this)

  }

  addNewItem() {
    let newList = this.state.items
    newList.push(this.state.inputval)

    console.log(newList)

    this.setState({ items: newList, inputval:'' })

    //this.setState((state) => ({items: state.items.concat([newItem])})
    //console.log(this.state.items)
     // )
  }
  
  handleChange(e) {
    this.setState({ inputval: e.target.value })
  } // triggers each time someone types into input field; need to have this every time we want to display a user input

  render() {
    return (
      <div>
        <h2>This is my shopping list!</h2>
        <div>
          <h4>Add item to list</h4>
          <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.inputval}/>
          <button onClick={() => this.addNewItem()}>Add</button>

        </div>
        <ShoppingList items={this.state.items} />  //pass as this.state.items, but in ShoppingList these are props?
        <ButtonExample />
        <p><h1>Calculator begins here</h1></p>
        <Calculator1 />
      </div>
    )
  }
}

export default App;

// add a line to the ShoppingList component that states how many items are in the list
// create a component that keep track of the value in an input field and when a button is clicked, make that value show up on the page