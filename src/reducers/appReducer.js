import initialState from './initialState';

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_ROLL':
      return { ...state,
        roll: action.roll,
      };
    default:
      return state;
  }
}

export default appReducer;
