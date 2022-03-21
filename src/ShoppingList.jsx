import React, { Component } from 'react'
import ShoppingListForm from './ShoppingListForm';
import { v4 as uuidv4 } from 'uuid';
class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state ={
        goods: [{
            id:uuidv4(),
            item:"20 pounds milk",
            qnty:"5 grams",
        }]
    }
        this.addItem=this.addItem.bind(this);
    }
    addItem(item) {
        // console.log(item);
        // this.setState(oldState=>({
        //     goods:[...oldState.goods,item]
        // }))
        let newItem={...item,id: uuidv4()};
        // console.log([...this.state.goods,item]);
        this.setState(oldState=>({
            goods:[...oldState.goods,newItem]
        }))
    }
    render() {
        return <div className="shopping-list">
        {this.state.goods.map(k=>{
            return <li key={uuidv4()}>{k.item} : <span> {k.qnty} </span></li>
        })}
        <ShoppingListForm addItem={this.addItem}/>
        </div>
    }
}
export default ShoppingList;