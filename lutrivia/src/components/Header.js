import React from 'react';

function Header(props) {

    return (
      <div>
          <h1 id="lutrivia-header">Lutrivia</h1>
          <button className="new-game-button" onClick={props.newGame}>New Game</button>
          <h2 id="score">Score: {props.score}</h2>
      </div>
    );
  }
  
  export default Header;