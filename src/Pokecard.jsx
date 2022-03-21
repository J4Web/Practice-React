import React, { Component } from 'react';
import './Pokecard.css';
function padding(id)
{
    if(id>=1 && id<=9) return "00"+id;
    if(id>=10 && id<=99) return "0"+id;
    else return id;
}
class Pokecard extends Component {
render() {
    const apiURL="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
    const {name,type,exp,id} = this.props;
    return <div className="pokecard">
    <h1>{name}</h1>
    <img src={`${apiURL}${padding(id)}.png`} alt={name} />
    <h3>Type: {type}</h3>
    <h3>EXP: {exp}</h3>
    </div>
}
}
export default Pokecard;