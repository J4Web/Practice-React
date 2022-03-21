import React, { Component } from 'react'
import NewBoxForm from './NewBoxForm';
import Box1 from './Box1';
export default class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state=
        {
            a:Array.from({length:0}),
            width: "",
            height: "",
            color: ""
        }
        this.addItem=this.addItem.bind(this)

    }
    addItem(s)
    {
        this.setState({
            a:Array.from({length:this.state.a.length+1}),
            width: s.width,
            height: s.height,
            color: s.color
        })
        this.setState({
            width: "",
            height: "",
            color: "",
        })
    }
render() {
    return (
    <div><h1>BoxList</h1>
    {this.state.a.map(k=>{
        return <Box1 width={this.state.width} height={this.state.height} color={this.state.color}/>})}
    <NewBoxForm addItem={this.addItem}/></div>
    )
}
}
