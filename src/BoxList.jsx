import React, { Component } from 'react'
import NewBoxForm from './NewBoxForm';
import Box1 from './Box1';
export default class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state=
        {
            boxes: [{width:"", height:"",color:""}]
        }
        this.addItem=this.addItem.bind(this);

    }
    addItem(s)
    {
        this.setState(oldState=>({
            boxes: [...oldState.boxes,s]
        }))
    }
render() {
    return (
    <div><h1>BoxList</h1>
    <NewBoxForm addItem={this.addItem}/>
    {this.state.boxes.map(k=>{
        return <Box1 width={k.width} height={k.height} color={k.color}/>})}
    </div>
    )
}
}
