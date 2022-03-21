import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
class Main extends Component{
    render() {
        return (<div>
            <App/>
        </div>);
    }
}
ReactDOM.render(<Main/>,document.getElementById('root'));