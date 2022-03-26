import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css';
const apiUrl='https://www.deckofcardsapi.com/api/deck/';
// const apiURL="https://www.deckofcardsapi.com/api/deck/new/shuffle/"
class Deck extends Component {
    constructor(props) {
        super(props);
        this.state={
            deck:"",
            card:[]
        };
        this.getCards=this.getCards.bind(this);
    }
    async componentDidMount(){
        let fetchData=await axios.get(`${apiUrl}/new/shuffle/`);
        // console.log(fetchData.data);

        this.setState(
            {
            deck: fetchData.data.deck_id
        });
    }
    async getCards(e){
        let id=this.state.deck;
        // console.log(id);
        try{
            let cardUrl=`${apiUrl}${id}/draw/`;
            
        let data=await axios.get(cardUrl);
        let card=data.data.cards[0];
        let check=(data.data.success);
        if(!check){
            throw new Error("Cards No MORE REMAINING")
        }
        this.setState(oldState=>({
            card: [...oldState.card,{
                id: card.code,
                img: card.image,
                name: `${card.value} of ${card.suit}`
            }]
        }))

        }catch(e){
            alert(e);
        }
        
        // console.log(data.data.cards[0]);

    }
    render() {
        return (
            <div className="Decl">
            <div className="container-card">

            
                <h1 className="Deck-title">Card Dealer</h1>
                <h1 className="Deck-title subtitle">A little demo made with React <span>♣♠</span></h1>
                <button onClick={this.getCards}>Get Card!</button>
                </div>
                {this.state.card.map(k=>{
                    return <div className="deck-dealer"><Card key={k.id} img={k.img} name={k.name}/></div>
                })}
                
            </div>
        );
    }
}

export default Deck;