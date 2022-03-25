import React, { Component } from 'react'
import axios from 'axios';
import './Loader.css'
export default class LoaderData extends Component {
    constructor(props) {
        super(props);
        this.state = {data:"",notLoaded:true}
    }
    componentDidMount() {
      axios.get('https://api.github.com/zen').then(res=>{
            this.setState({data:res.data,notLoaded:false})
        })
    }
  render() {
    return (
      <div>
      {this.state.notLoaded ? <div className="loader"></div> :  <div>
        <h1>Component Did Mount</h1>
      <p>{this.state.data}</p>

      </div> }
    

      </div>
    )
  }
}
