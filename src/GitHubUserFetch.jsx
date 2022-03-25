import React, { Component } from 'react';
import axios from 'axios';
class GitHubUserFetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img:"",
            user:""
        }
    }
    async componentDidMount()
    {
        const user=`https://api.github.com/users/${this.props.user}`;
        let resp=await axios.get(user);
        let data =resp.data;
        console.log(data);
        this.setState({
            img: data.avatar_url,
            name: data.name
        })
    }
    render() {
        return (
            <div>
            {/* <h1>Hellooo</h1> */}
                    <h1>{this.state.name}</h1>
                    <img src={this.state.img} alt={this.state.user}/>
            </div>
        );
    }
}

export default GitHubUserFetch;