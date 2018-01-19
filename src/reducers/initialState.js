const initialState = {
  gameScores: [ 0, 0 ],
  turnPlayer: 1,
  roll: [ /* 1, 2, 3, 4, 5, 6 */ ],
  saved: [ /* 1, 1, 5, 5 */ ],
  allowed: {
    roll: true,
    save: false,
    end: true,
  },
};

export default initialState;
