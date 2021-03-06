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
// import NewBoxForm from './NewBoxForm';
// import BoxList from './BoxList';
// import ComponentDidMount from './ComponentDidMount'
// import LoaderData  from './LoaderData';
// import GitHubUserFetch from './GitHubUserFetch'
// import Counter from './Counter';
// import Deck from './Deck';
// import FakingRouting from './FakingRouting'
// import Routing from './Routing';
import { Route,Routes,NavLink} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
class App extends Component {
    render() {
        return  (
        <div className="app">
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
            {/* <BoxList/> */}
            {/* <NewBoxForm/> */}
            {/* <ComponentDidMount/> */}
            {/* <LoaderData/> */}
            {/* <GitHubUserFetch user="colt" /> */}
            {/* <Counter/> */}
            {/* <Deck/> */}
            {/* <Hangman/> */}
            {/* <FakingRouting/> */}

            {/* <Link to="/">Home</Link>
            <Link to="/about">about</Link>
            <Link to="/"contact>Contact</Link> */}
            <NavLink exact="/"   className={({isActive}) => (isActive ? "active-link" : 'none')}  to="/">Home</NavLink>
            <NavLink exact="/about"      className={({isActive}) => (isActive ? "active-link" : 'none')}to="/about">about</NavLink>
            <NavLink exact="/contact"      className={({isActive}) => (isActive ? "active-link" : 'none')} to="/contact">Contact</NavLink>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>} />
                <Route  path="/about" element={<About/>} />
            </Routes>
            </div>)
            
}
}
export default App;