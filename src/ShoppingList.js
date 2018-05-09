import React, { Component } from 'react';
// don't need to import component that gives props

//figure out how to make text input with 'add to cart' button; chagne shopping List component below

// class ShoppingContainer extends Component {
// //have initial state; just input with no list
// // add item function
// // update item function (?)
// // render with input and button; both with function props
// // render with Shopping List
//     constructor(props) {
//         super(props);
//         this.state = {items:[]}; // initally nothing in items
//         this.addItem = this.addItem.bind(this);
//     }

//     addItem(newItem) {
//         this.setState({items: this.state.items.push(newItem)})
//     }

//     render() { 
//         return(
//         <div>
//         <h2>Add Items to Shopping Cart!</h2>
//         <input type="text"></input>
//         <button onClick={this.addItem}>Add Item</button> //pass addItem function as prop to button
//         <div><h3>Shopping List</h3></div>
//         <ShoppingList value={this.state.items} /> //pass state items to shoping list
//         </div>
//     )}

// }
class ShoppingList extends Component { // component that just displays list; needs to be passed items as props
    render() {
        var shoppingListHtml = [] //create list object?
        for (var i = 0; i < this.props.items.length; i++) {
                shoppingListHtml.push(<li>{this.props.items[i]}</li>)
            } //return list of items
        
        return (
            <div>
                <p>{shoppingListHtml}</p>
                <p>{shoppingListHtml.length}</p>
            </div>
            )
    }
}

export default ShoppingList;
// export default ShoppingList;





// class ShoppingList extends Component {
//     render() {
//         var shoppingListHtml = []
//         for (var i = 0; i < this.props.items.length; i++) {
//             shoppingListHtml.push(<div>{this.props.items[i]}</div>)

//         }

//         return (<div>
//                     <p>{shoppingListHtml}</p>
//                     <p>{shoppingListHtml.length}</p>
//             </div>)
//     }
// }

// export default ShoppingList;