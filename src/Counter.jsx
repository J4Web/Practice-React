import React,{Component} from 'react'
class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            num:10
        }
        this.handleClick=this.handleClick.bind(this);
        this.reset=this.reset.bind(this);
    }
    handleClick(e)
    {
        const rand=Math.floor(Math.random() * 7)+1;
        this.setState({num: rand});
    }
    reset(e)
    {
        this.setState({num: 10});
    }
    render() {
        return <div>
        <h1> Your Current Number is : {this.state.num}</h1>
        <button onClick={this.handleClick} disabled={this.state.num===7?true:false}> Random Number </button>
        <button onClick={this.reset}>Reset</button>
        </div>
    }
}
export default Counter;