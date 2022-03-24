import React, { Component } from 'react';
import axios from 'axios';
export default class ComponentDidMount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quote:""
        }
        console.warn("this is constructor");
    }
    componentDidMount()
    {
        console.warn("this is componentDidMt");
    axios.get('https://api.github.com/zen').then(res=> this.setState({quote:res.data}))
    }
    //Getting the quotes using axios and setting the state inside the component did mount
render() {
    console.warn("this is render");
    return (
    <div><h1>ComponentDidMount</h1>
    {this.state.quote}
    </div>)
}
}
