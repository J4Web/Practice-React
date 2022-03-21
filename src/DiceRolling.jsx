import React,{Component} from 'react';
import Dice from './Dice';
function rand()
{
    return Math.floor(Math.random()*6);
}

class DiceRolling extends Component {
static defaultProps={
    a:['one','two','three','four','five','six']

}
    constructor(props){
        super(props);
        this.state={
            spot1: this.props.a[rand()],
            spot2: this.props.a[rand()],
            roll:false
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e){
        this.setState(
        {spot1: this.props.a[rand()]
            ,spot2: this.props.a[rand()],
            roll:true
        });
        setTimeout(()=>
        {
            this.setState({roll:false});
        },1000)
    }
    render()
    {
        return <div>
            <Dice spot={this.state.spot1}/>
            <Dice spot={this.state.spot2}/>
            <button onClick={this.handleClick} disabled={this.state.roll}> {this.state.roll? 'Rolling' : 'Roll Dice'}</button>
        </div>
    }
}
export default DiceRolling;