import React from 'react';
import './RollResult.css';

function renderDice(roll) {
  let diceJsx = [];
  for (let i = 0; i < roll.length; i++) {
    diceJsx.push(
      <div key={i} className="die">
        <p>{roll[i]}</p>
      </div>
    );
  }
  return diceJsx;
}

const RollResult = props =>  (
  <div className="roll-result">
    {renderDice(props.roll)}
  </div>
);

export default RollResult;
