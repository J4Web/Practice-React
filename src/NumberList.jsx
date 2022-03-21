import React, { Component } from 'react'
import NumberDis from './NumberDis';
class NumberList extends Component
{
    constructor(props){
        super(props);
        this.state={a: [1,2,3,4,5,6,7,8,9]}
        this.handleRemove=this.handleRemove.bind(this);
    }
remove(n)
{
    this.setState(st=>({
        a: st.a.filter(p=> p!==n)
        }));
}
    handleRemove(n)
    {
        this.remove(n);
    }
    render(){
        return (<div>
        {this.state.a.map(n=> <NumberDis value={n} remove={this.handleRemove} />)}
        </div>)
    }
}
export default NumberList;