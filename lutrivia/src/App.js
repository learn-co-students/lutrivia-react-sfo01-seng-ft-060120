import React from 'react';
import LutriviaContainer from './components/LutriviaContainer';
import './App.css';

import data from './data'

class App extends React.Component {

  state = {
    questions: data,
    score: 0,
    newGameStatus: true
  }

adjustPoints = (points) => {
    this.setState ({
      score: this.state.score + points,
      newGameStatus: false
    })
}


  newGame = () => {
    this.setState ({
      questions: data,
      score: 0,
      newGameStatus: true
    })
  }
  
  render() {
    return (
      <div>
        <LutriviaContainer questions={this.state.questions} score={this.state.score} adjustPoints={this.adjustPoints} newGame={this.newGame} newGameStatus={this.state.newGameStatus}/>
      </div>
    );
  }

}

export default App;
