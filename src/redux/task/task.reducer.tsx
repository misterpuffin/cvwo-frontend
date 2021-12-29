import { CREATE_TASK, GET_TASKS, UPDATE_TASK, DELETE_TASK } from "./task.types"


const INITIAL_STATE = {tasks: []}

const taskReducer = (state = INITIAL_STATE, action: any) => {
  switch(action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload
      }
    case CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task: any) => task.id === action.payload.id ? action.payload : task)
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task: any) => task.id !== action.payload.id)
      }
    default:
      return state;
  }
}

export default taskReducer;