import React from 'react';
// import Pokedex from './Pokedex';
import Data from './Data';
import Pokecard from './Pokecard';
function random()
{
    var a=Math.floor(Data.length*Math.random());
    return a;
}
class Pokegame extends React.Component {
    render() 
    {
        let hand1=[];
        let hand2=[...Data];
        while(hand1.length<hand2.length){
            let rand=random();
            hand1.push(hand2[rand]);
            hand2.pop(hand2[rand]);
        }
        return (<div className="pokegame_game">
        <h1>Pokegame Starts...</h1>
        <h2>Hand 1</h2>
        {hand1.map(d=> <Pokecard name={d.name} id={d.id} type={d.type} exp={d.base_experience}/>)}
        <h2>Hand 2</h2>
        
        {hand2.map(d=> <Pokecard name={d.name} id={d.id} type={d.type} exp={d.base_experience}/>)}

        </div>);
    }

}

export default Pokegame;