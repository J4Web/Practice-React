import React, { Component } from 'react'
import './Box1.css';
export default class Box1 extends Component {
render() {
    return (
    <div className="box1" styles={{width: `${this.props.width}px`,height: `${this.props.height}px`,backgroundColor: `${this.props.backgroundColor}`}}></div>
    )
}
}
