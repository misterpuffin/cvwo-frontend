const INITIAL_STATE = {
  message: ""
};

const messageReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return {
        ...state,
        message: action.payload
      };
    case 'CLEAR_MESSAGE':
      return {
        message: ""
      }
    default:
      return state;
  }
};

export default messageReducer;