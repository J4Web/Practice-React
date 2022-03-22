import React, { Component } from 'react'
import './Box1.css';
export default class Box1 extends Component {
render() {
    const {width, height,color}=this.props;
    return (
        
    <div style={{width: `${width}px`,height: `${height}px`,backgroundColor: `${color}`}}></div>
    )
}
}
