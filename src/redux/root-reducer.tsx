import { combineReducers } from 'redux';

import authReducer from './auth/auth.reducer';
import messageReducer from './message/message.reducer';
import taskReducer from "./task/task.reducer"

export default combineReducers({
  auth: authReducer,
  message: messageReducer,
  tasks: taskReducer
});