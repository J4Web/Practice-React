import React, { Component } from 'react'
class DontMutate extends Component{
    constructor(props){
        super(props);
        this.state={
            a:new Array(0)
        }
        //  this.rand=this.rand.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    static defaultProps = {
        p:['angry','anchor','archive','at','baby','bolt','cloud','couch','bone','bell']
    }
    handleClick(e)
    {
        const newObj= this.props.p[Math.floor(Math.random()*10)];
        const oldArray=[...this.state.a]
        this.setState({a:[...oldArray,newObj]})
    }
    render(){
        return (<div>
        {this.state.a.map(k=><i className={`fas fa-${k}`}></i>)}
        <p></p>
        <button onClick={this.handleClick}>Add Emoji</button>
        </div>)
    }
}
export default DontMutate;