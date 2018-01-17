import initialState from './initialState';

const appReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'START_NEW_GAME':
      return { ...state,
        gameScores: [ 0, 0 ],
        roll: [],
        saved: [],
        allowed: {
          roll: true,
          save: false,
        },
      };

    case 'NEW_ROLL':
      if (state.roll.length === 0) {
        return { ...state,
          gameScores: [ 100, 200 ], // dummy values
          roll: action.roll,
          saved: [],
          allowed: { ...state.allowed,
            roll: false,
            save: true,
          },
        };
      }
      return { ...state,
        gameScores: [ 300, 400 ], // dummy values
        roll: action.roll,
        allowed: { ...state.allowed,
          roll: false,
          save: true,
        },
      };

    case 'EXTRACT_AND_SAVE':
      return { ...state,
        gameScores: [ 500, 600 ], // dummy values
        roll: action.roll,
        saved: action.saved,
        allowed: { ...state.allowed,
          roll: true,
          save: false,
        },
      };

    default:
      return state;
  }
}

export default appReducer;
