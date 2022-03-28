import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
class Routing extends Component {
    render() {
        return (
            <div>
            <Switch>
            <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/help" component={About}/>
            </Switch>
            </div>
        );
    }
}

export default Routing;