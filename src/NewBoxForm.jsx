import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
class NewBoxForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            width:"",
            height:"",
            color:"" 
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e)
    {
        let newBox={...this.state, id: uuidv4()};
        e.preventDefault();
        this.props.addItem(newBox);
        this.setState({
            width:"",
            height:"",
            color:""
        });

    }
    handleChange(evt){
        this.setState({
            [evt.target.name]:evt.target.value,
            [evt.target.name]:evt.target.value,
            [evt.target.name]:evt.target.value,
        })
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>

            <label htmlFor="width"> Width : </label>
            <input id="width" type="text" name="width" value={this.state.width} onChange={this.handleChange} />
            <label htmlFor="height"> Height : </label>
            <input id="height" type="text" name="height" value={this.state.height} onChange={this.handleChange}/>

            <label htmlFor="color">Colors : </label>
            <input id="color" type="text" name="color" value={this.state.color} onChange={this.handleChange}/>
            <button>Done ?!</button>
            </form>
            </div>
        );
    }
}

export default NewBoxForm;