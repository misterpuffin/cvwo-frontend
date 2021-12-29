import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS } from "./auth.types"


const user = JSON.parse(localStorage.getItem("user") || "{}");

const INITIAL_STATE = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null }

const authReducer = (state = INITIAL_STATE, action: any) => {
  switch(action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false
      }
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user
      }
    case LOGIN_FAIL: 
      return {
        ...state, 
        isLoggedIn: false,
        user: null
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user:null
      }
    default:
      return state;
  }
}

export default authReducer