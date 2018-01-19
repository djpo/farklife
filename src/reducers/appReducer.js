import initialState from './initialState';

const appReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'START_NEW_GAME':
      return { ...state,
        gameScores: [0, 0],
        turnPlayer: 1,
        roll: [],
        saved: [],
        allowed: {
          roll: true,
          save: false,
          end: false,
        },
      };

    case 'NEW_ROLL':
      // hot dice, new full roll of 6 dice
      if (state.roll.length === 0) {
        return { ...state,
          turnAnalysis: initialState.turnAnalysis, // empty visible analysis
          roll: action.roll,
          saved: [],
          allowed: { ...state.allowed,
            roll: false,
            save: true,
            end: false,
          },
        };
      }
      // continued roll, less than 6 dice
      return { ...state,
        roll: action.roll,
        allowed: { ...state.allowed,
          roll: false,
          save: true,
          end: false,
        },
      };

    case 'EXTRACT_AND_SAVE':
      return { ...state,
        turnRunningScore: state.turnRunningScore + action.turnRunningScoreVisible,
        turnAnalysis: action.turnAnalysis,
        roll: action.roll,
        saved: action.saved,
        allowed: { ...state.allowed,
          roll: true,
          save: false,
          end: true,
        },
      };

    case 'END_TURN':
      return { ...state,
        turnPlayer: (state.turnPlayer === 1) ? 2 : 1,
        allowed: { ...state.allowed,
          end: false,
        },
      };

    default:
      return state;
  }
}

export default appReducer;
