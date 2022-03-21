import React, { Component } from 'react';
import './LottoComp.css';
class LottoComp extends Component
{
    render() {
        return (
            <div className="Ball">
            {this.props.nums}
            </div>
        )
    }
}
export default LottoComp;