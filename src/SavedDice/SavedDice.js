import React from 'react';
import './SavedDice.css';

function renderDice(saved) {
  let diceJsx = [];
  for (let i = 0; i < saved.length; i++) {
    diceJsx.push(
      <div key={i} className="saved-die">
        <p>{saved[i]}</p>
      </div>
    );
  }
  return diceJsx;
}

const SavedDice = props => (
  <div className="saved-dice">
    {renderDice(props.saved)}
  </div>
);

export default SavedDice;
