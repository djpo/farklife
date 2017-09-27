import initialState from './initialState';

const appReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'NEW_ROLL':
      if (state.roll.length === 0) {
        return { ...state,
          roll: action.roll,
          saved: [],
          allowed: 'save',
        };
      }
      return { ...state,
        roll: action.roll,
        allowed: 'save',
      };

    case 'EXTRACT_AND_SAVE':
      return { ...state,
        roll: action.roll,
        saved: action.saved,
        allowed: 'roll',
      };

    default:
      return state;
  }
}

export default appReducer;
