import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
class Main extends Component{
    render() {
        return ( <BrowserRouter>
    <App /></BrowserRouter>);
    }
}
ReactDOM.render(<Main/>,document.getElementById('root'));