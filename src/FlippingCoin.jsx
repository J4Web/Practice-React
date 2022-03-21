import React, { Component } from 'react'
import ShowSide from './ShowSide';
class FlippingCoin extends Component {
    constructor(props){
        super(props);
        this.state={
            img:"https://tinyurl.com/react-coin-heads-jpg",
            ctHead: 0,
            ctTail: 0,
            tFilps:0
        }
        this.handleFlip=this.handleFlip.bind(this);
        this.change=this.change.bind(this);
    }
    change(e)
    {
        let rand=Math.floor(Math.random()*2);
        if(rand===1){
            this.setState(curState=> ({
                img: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg",
                ctTail: curState.ctTail+1,
                tFilps:curState.tFilps+1
                

            }))
        }
        else{
            this.setState(curState=> ({
                img: "https://tinyurl.com/react-coin-heads-jpg",
                ctHead: curState.ctHead+1,
                tFilps:curState.tFilps+1
                

            }))


        }
    }
    handleFlip(e)
    {
        this.change();
    }
    render() {
        return (<div className="parent" >
        <ShowSide side={this.state.img}/>
        <button onClick={this.handleFlip}>Flip Me</button>
        <p>Count of Current Heads : {this.state.ctHead} And Count of Tails : {this.state.ctTail}  Out of the total Flips : {this.state.tFilps}</p>
        </div>)
    }
}
export default FlippingCoin;