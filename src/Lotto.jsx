import React, { Component } from 'react'
import LottoComp from './LottoComp';
class Lotto extends Component {
    static defaultProps = {
        num: 8,
        heading: "Lotto",
        maxVal:40
    }
    constructor(props) {
        super(props);
        this.state = {
            nums: Array.from({length: this.props.num})
        }
        this.handleClick=this.handleClick.bind(this);
    }
handleRandom(e)
{
    this.setState(curState=>( 
        {
        nums: curState.nums.map(
            n=> Math.floor(Math.random()*this.props.maxVal+1)
        )}
    ))
}
    handleClick(e){
        this.handleRandom();
    }
    render(){
        return <div className="lotto">
        <h1>{this.props.heading}</h1>
        {this.state.nums.map(n=> <LottoComp nums={n}/>)}
        <button onClick={this.handleClick}>Button</button>
                <h1>Mini Machine</h1>
        {this.state.nums.map(n=> <LottoComp nums={n}/>)}
        <button onClick={this.handleClick}>Button</button>

        </div>
    }
}
export default Lotto;