

import React, { Component } from 'react'
export default class ShoppingListForm extends Component {
    constructor(props){
        super(props);
        this.state={
            item:"",
            qnty:""
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(e)
    {
        this.setState({
            [e.target.name]:e.target.value,
            [e.target.name]:e.target.value
        })
    }
    handleSubmit(e)
    {
        e.preventDefault();
        // console.log(this.state)
        this.props.addItem(this.state);
        // this.setState({
        //     name:"",
        //     qnty:""
        // })


    }
render() {
    return (
    <div>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name : </label>
        <input id="name" type="text" name="item" value={this.state.name} onChange={this.handleChange} />
        <label htmlFor="qty">Quantity :</label>
        <input id="qty" type="text" name="qnty" value={this.state.qnty}
            onChange={this.handleChange} />
            <button>ADD Item!!</button>
        </form>
    </div>
    )
}
}
