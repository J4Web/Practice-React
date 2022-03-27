import React, { Component } from 'react'
import Home from './Home';
import About from './About';
import Contact from './Contact';
export default class FakingRouting extends Component {
    constructor(props) {
        super(props);
        this.state={
            page:"home"
        };
    }
    handleClick(page)
    {
        this.setState({page:page});
    }
    showPage()
    {
        if(this.state.page==="home") return <Home/>;
        else if(this.state.page==="about") return <About/>;
        else return <Contact/>;
    }
render() {
    return (
    <div>
    <nav>
        <a href="#" onClick={()=> this.handleClick("home")}>Home</a>
        <a href="#" onClick={()=> this.handleClick("about")}>About</a>
        <a href="#" onClick={()=> this.handleClick("contact")}>Contact</a>
    </nav>
    {this.showPage()}
    </div>
    )
}
}
