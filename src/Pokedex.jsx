import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';
import Data from './Data';
class Pokedex extends Component {
    render() {
        return (<div className="pokedex">
        {Data.map(d=><Pokecard name={d.name} type={d.type} exp={d.base_experience} id={d.id}/>)}
        </div>)
    }
}
export default Pokedex;