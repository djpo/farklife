import React from 'react';
import PropTypes from 'prop-types';
import RollAnalysisPres from './RollAnalysisPres';

const valueTable = {
  1: 100,
  2: 0,
  3: 0,
  4: 0,
  5: 50,
  6: 0,
};

function count(roll, valueToCount) {
  let runningTotal = 0;

  roll.forEach(die => {
    if (die === valueToCount) {
      runningTotal++;
    }
  });

  return runningTotal;
};

function processRoll(roll) {
  let rollTotalPoints = 0;

  // const analysisMatrix = [1, 2, 3, 4, 5, 6].map((v) => {
  const analysisMatrix = [1, 5].map((v) => {
    const thisCount = count(roll, v);
    const thisPointWorth = valueTable[v];
    const thisTotalPoints = thisCount * thisPointWorth;

    rollTotalPoints += thisTotalPoints;

    return {
      dieValue: v,
      count: thisCount,
      pointsPerDie: valueTable[v],
      totalForValue: thisCount * thisPointWorth,
    };
  });

  return {
    rollTotalPoints: rollTotalPoints,
    analysisMatrix: analysisMatrix,
  };
}

const propTypes = {
  roll: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const RollAnalysis = props => (
  <RollAnalysisPres analysisResult={processRoll(props.roll)} />
);

RollAnalysis.propTypes = propTypes;
export default RollAnalysis;
