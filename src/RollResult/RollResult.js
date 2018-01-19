import React from 'react';
import PropTypes from 'prop-types';
import './RollResult.css';

function renderDice(roll) {
  let diceJsx = [];
  for (let i = 0; i < roll.length; i++) {
    diceJsx.push(
      <div key={i} className="roll-die">
        <p>{roll[i]}</p>
      </div>
    );
  }
  return diceJsx;
}

const propTypes = {
  roll: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const RollResult = props => (
  <div className="roll-result">
    {renderDice(props.roll)}
  </div>
);

RollResult.propTypes = propTypes;
export default RollResult;
