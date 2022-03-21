import React,{ Component} from 'react'

class NumberDis extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e){
        this.props.remove(this.props.value);
    }
    render() {
        return (<div>
            {this.props.value}
            <button onClick={this.handleClick}>X</button>
        </div>)
    }
}

export default NumberDis;
