import { combineReducers } from 'redux';
import taskReducer from './tasksReducer';

const rootReducer = combineReducers({
  tasks: taskReducer
});

export default rootReducer;
