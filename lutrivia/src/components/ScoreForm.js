import React from 'react';

function ScoreForm() {

    return (
      <div>
          <form id="score-form">
            <input type="text" name="name" placeholder="Name" className="score-form-input"/>
            <input type="submit" name="submit" value="Submit Score" className="submit-button"/>
          </form>
      </div>
    );
  }
  
  export default ScoreForm;