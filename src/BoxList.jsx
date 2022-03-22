import React, { Component } from 'react'
import NewBoxForm from './NewBoxForm';
import Box1 from './Box1';
export default class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state=
        {
            boxes: []
        }
        this.addItem=this.addItem.bind(this);
        this.RemoveItem=this.RemoveItem.bind(this);

    }
    addItem(s)
    {
        this.setState(oldState=>({
            boxes: [...oldState.boxes,s]
        }))
    }
    RemoveItem(id){
        this.setState({
            boxes: this.state.boxes.filter(box => box.id!==id)
        })
        
    }
render() {
    return (
    <div><h1>BoxList</h1>
    <NewBoxForm addItem={this.addItem}/>
    {this.state.boxes.map(k=>{
        return <Box1 key={k.id} width={k.width} height={k.height} color={k.color} id={k.id} RemoveItem={this.RemoveItem}/> })}
    </div>
    )
}
}
