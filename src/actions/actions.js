export const startNewGame = () => {
  return { type: 'START_NEW_GAME' };
};

export const newRoll = (oldRollLength) => {
  const numberOfDiceToRoll = (oldRollLength === 0) ? 6 : oldRollLength;

  const randomDie = () => Math.ceil(Math.random() * 6);

  let roll = [];
  for (let i = 0; i < numberOfDiceToRoll; i++) {
    roll.push(randomDie());
  }

  return {
    type: 'NEW_ROLL',
    roll: roll,
  }
};

export const extractAndSave = (oldRoll, oldSaved) => {
  // collect new 1s and 5s
  const newToSave = oldRoll.filter(x => x === 1 || x === 5);

  // add new 1s and 5s to saved
  const savedUpdated = [...oldSaved, ...newToSave];

  // remove 1s and 5s from roll
  const rollUpdated = oldRoll.filter(x => x !== 1 && x !== 5);

  // process turnAnalysis; add (visible) saved dice to turnRunningScore
  function processRoll(roll) {
    function count(roll, valueToCount) {
      let runningTotal = 0;
      roll.forEach(die => {
        if (die === valueToCount) {runningTotal++;}
      });
      return runningTotal;
    }
    const valueTable = { 1: 100, 5: 50 };
    let turnRunningScoreVisible = 0;

    const turnAnalysis = [1, 5].map((v) => {
      const thisCount = count(roll, v);
      const thisPointWorth = valueTable[v];
      const thisTotalPoints = thisCount * thisPointWorth;

      turnRunningScoreVisible += thisTotalPoints;

      return {
        dieValue: v,
        count: thisCount,
        pointsPerDie: valueTable[v],
        totalForValue: thisCount * thisPointWorth,
      };
    });

    return { turnAnalysis, turnRunningScoreVisible };
  }

  const { turnAnalysis, turnRunningScoreVisible } = processRoll(savedUpdated);

  return {
    type: 'EXTRACT_AND_SAVE',
    roll: rollUpdated,
    saved: savedUpdated,
    turnAnalysis,
    turnRunningScoreVisible,
  }
};

export const endTurn = () => ({ type: 'END_TURN' });
