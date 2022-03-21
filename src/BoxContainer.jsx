import React, {Component} from 'react';
import Box from './Box';
import './BoxContainer.css';
import HelperRand from './HelperRand';
class BoxContainer extends Component{
    static defaultProps = {
        nums: 20,
                a: ['blue','green','yellow','orange','violet','pink','magenta','green']
        
    }
    render() {
        return <div className="BoxContainer">
        {Array.from({length: this.props.nums}).map(()=> <Box color={HelperRand(this.props.a)}/>)}

        </div>
    }
}
export default BoxContainer; 