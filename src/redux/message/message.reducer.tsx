const INITIAL_STATE = {
  message: "",
  error: false
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
    case 'SET_ERROR':
      return {
        ...state,
        error: true
      }
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: false
      }
    default:
      return state;
  }
};

export default messageReducer;