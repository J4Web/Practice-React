import React, { Component } from 'react'
import "./ShowSide.css";
class ShowSide extends Component {
    render() {
        return <div className="parent">
            <img className="side" src={this.props.side} alt="coin sides"/>
        </div>
    }
}
export default ShowSide;