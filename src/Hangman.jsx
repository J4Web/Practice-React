import React, { Component } from "react";
import "./Hangman.css";
import {randomWord} from './Word';
import img0 from "./Img/0.jpg";
import img1 from "./Img/1.jpg";
import img2 from "./Img/2.jpg";
import img3 from "./Img/3.jpg";
import img4 from "./Img/4.jpg";
import img5 from "./Img/5.jpg";
import img6 from "./Img/6.jpg";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
};

  constructor(props) {
    super(props);
    this.state = { 
      nWrong: 0,
      guessed: new Set(), 
      answer: randomWord() 
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.handleRestartGame=this.handleRestartGame.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }
  restart()
  {
    this.setState(oldState=> ({
      nWrong:0, 
      guessed: new Set(),
      answer: randomWord()
    }));
  }
  handleRestartGame()
  {
    this.restart();
  }
  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(k => (
    <button
        value={k}
        key={k}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(k)}
    >
        {k}
    </button>
    ));
}
  /** render: render game */
render() {
    const gameOver=(this.state.nWrong >= this.props.maxWrong) ? 1 :0;
    const gameWon=(this.guessedWord().join("")===this.state.answer) ? 1:0;
    return (
    <div className='Hangman'>
        <h1>Hangman</h1>
        {(!gameOver && !gameWon) && <img src={this.props.images[this.state.nWrong]} alt={`${this.state.nWrong} Wrong attempts`}/>}
        {!gameOver? <p className='Hangman-word'>{this.guessedWord()}</p> : <h2>{`The Word Was : ${this.state.answer}`}</h2>}
        {!gameOver ? <p>Wrong Guesses : {this.state.nWrong}</p> : <p>You Lost BOOOOO</p>}
        {gameWon ? <h3>"CONGRATS YOU WON AND YOU ROCK!"</h3> : null}
        <p className='Hangman-btns'>{!gameOver && !gameWon ? this.generateButtons() : <button  id="restart-game" onClick={this.handleRestartGame}>Restart</button>}</p>
    </div>
    );
}
}
export default Hangman;
