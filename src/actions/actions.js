export const newRoll = (roll) => {

  const randomDie = () => Math.ceil(Math.random() * 6);

  let newRoll = [];
  for (let i = 0; i < 6; i++) {
    newRoll.push(randomDie());
  }

  return {
    type: 'NEW_ROLL',
    roll: newRoll,
  }
};
