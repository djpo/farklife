const initialState = {
  gameScores: [0, 0],

  turnPlayer: 1,
  turnRunningScore: 0,
  turnAnalysis: [
     {
      dieValue: 1,
      count: 0,
      pointsPerDie: 100,
      totalForValue: 0,
    },
    {
      dieValue: 5,
      count: 0,
      pointsPerDie: 50,
      totalForValue: 0,
    },
  ],

  roll: [ /* 1, 2, 3, 4, 5, 6 */ ],
  saved: [ /* 1, 1, 5, 5 */ ],

  allowed: {
    roll: true,
    save: false,
    end: false,
  },
};

export default initialState;
