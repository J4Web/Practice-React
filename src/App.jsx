import React,{Component} from 'react';
// import Pokedex from './Pokedex';
// import Pokegame from './Pokegame';
// import Dice from './Dice';
// import DontMutate from './DontMutate';
// import LottoComp from './LottoComp';
// import FlippingCoin from './FlippingCoin';
// import BoxContainer from './BoxContainer';
// import Lotto from './Lotto';
// import Counter from './Counter';
// import DiceRolling from './DiceRolling';
// import NumberList from './NumerList';
// import NumberList from './NumberList'
// import Hangman from './Hangman';
// import ShoppingList  from './ShoppingList';
import './App.css'
// import Box1 from './Box1';
import NewBoxForm from './NewBoxForm';
import BoxList from './BoxList';
class App extends Component {
    render() {
        return <div className="app">
            {/* <Pokedex/> */}
            {/* <Pokegame/> */}
            {/* <Counter/> */}
            {/* <DiceRolling/> */}
            {/* <DontMutate/> */}
            {/* <Lotto/> */}
            {/* <FlippingCoin/> */}
            {/* <BoxContainer/> */}
            {/* <NumberList/> */}
            {/* <Hangman/> */}
            {/* <ShoppingList/> */}
            <BoxList/>
            {/* <NewBoxForm/> */}

            </div>
    }
}
export default App;