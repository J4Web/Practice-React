import React, { Component } from 'react';
import './Box.css'
import HelperRand from './HelperRand'
class Box extends Component {
    static defaultProps = {
        a: ['blue','green','yellow','orange','violet','pink','magenta','green']
    }
    constructor(props) {
        super(props);
        this.state={
            color: this.props.color
        };
        this.handleClick=this.handleClick.bind(this);
        }
        setColor(e){
            let c;
            do{
            c= HelperRand(this.props.a);

            }
            while(this.state.color===c)
            this.setState({color:c});
            
        }
        handleClick(e){
            this.setColor();
            
        }
    render() {
        return (<div className="box" style={{ background: this.state.color }} onClick={this.handleClick}>
        </div>)
    }
}
export default Box;