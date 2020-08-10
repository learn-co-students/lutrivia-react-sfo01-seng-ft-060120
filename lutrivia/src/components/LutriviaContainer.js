import React from 'react';
import Header from './Header.js';
import QuestionCard from './QuestionCard.js';
import ScoreForm from './ScoreForm.js';

class LutriviaContainer extends React.Component {

    render() {
        return (
        <div className="lutrivia-container">
            <Header score={this.props.score} newGame={this.props.newGame} />
            <div id="question-cards">
                {
                    this.props.questions.questions.map (question => {
                        return <QuestionCard question={question} adjustPoints={this.props.adjustPoints} newGameStatus={this.props.newGameStatus}/>
                    })
                }
            </div>
            <ScoreForm />
        </div>
        );
    }  
  }
  
  export default LutriviaContainer;