import React, { Component } from 'react'
import './Card.css'
export default class Card extends Component {
    constructor(props) {
        super(props);
          let deg=(Math.random()*180)-30;
    let xPos=(Math.random()*40)-20;
    let yPos=(Math.random()*40)-20;
    this._transform=`translate(${xPos}px, ${yPos}px) rotate(${deg}deg)`;
    }
  render() {

    return (
        <img  style={{transform:this._transform}} className="card" src={this.props.img} alt={this.props.name}/>

    )
  }
}
