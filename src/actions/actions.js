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
  let newToSave = [];
  for (let i = 0; i < oldRoll.length; i++) {
    if (oldRoll[i] === 1 || oldRoll[i] === 5) {
      newToSave.push(oldRoll[i]);
    }
  }

  const rollUpdated = oldRoll.filter(x => x !== 1 && x !== 5);

  const savedUpdated = [...oldSaved, ...newToSave];

  return {
    type: 'EXTRACT_AND_SAVE',
    roll: rollUpdated,
    saved: savedUpdated,
  }
};

export const endTurn = () => ({ type: 'END_TURN' });
