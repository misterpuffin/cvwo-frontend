import { combineReducers } from 'redux';

import authReducer from './auth/auth.reducer';
import messageReducer from './message/message.reducer';
import taskReducer from "./task/task.reducer"
import filterReducer from "./filter/filter.reducer"

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  tasks: taskReducer,
  filters: filterReducer
});

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>