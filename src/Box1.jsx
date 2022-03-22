import React, { Component } from 'react'
import './Box1.css';
export default class Box1 extends Component {
   handleRemove=()=>{
       this.props.RemoveItem(this.props.id);
   }
render() {
    const {width, height,color}=this.props;
    return (  
        <div>
    <div style={{width: `${width}px`,height: `${height}px`,backgroundColor: `${color}`}}>
        
    </div>
    <button onClick={this.handleRemove}>X</button>
    </div>
    )
}
}
