import React from 'react';

class QuestionCard extends React.Component {

    state = {
      answered: false
    }

    trueOrFalse = (answer) => {
      if (this.props.question.answer === answer) {
        this.props.adjustPoints(10)
      } else {
        this.props.adjustPoints(-10)
      }
      this.setState ({
        answered: true
      })
    }

    render() {
      return (
        <div className="question-card">
            <h2> {this.props.question.text} </h2>
            {
              this.state.answered === false  || this.newGameStatus === true ?
                  (<button className="true-button" onClick={(event) => this.trueOrFalse(true, event)}>True</button>)
                :
                  (<button className="clicked-button">True</button>)
            }
            {
              this.state.answered === false  || this.newGameStatus === true ?
                (<button className="false-button" onClick={(event) => this.trueOrFalse(false, event)}>False</button>)
              :
                (<button className="clicked-button">False</button>)
            }
        </div>
      );
    }

  }
  
  export default QuestionCard;