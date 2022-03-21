import React, {Component} from 'react';
class Dice extends Component {
    render() {
        return <div>
        <i className={`fas fa-dice-${this.props.spot} fa-9x die-style`}></i>
        </div>
    }
}
export default Dice;