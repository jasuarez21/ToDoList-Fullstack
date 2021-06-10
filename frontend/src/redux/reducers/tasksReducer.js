/* eslint-disable no-underscore-dangle */
/* eslint-disable no-debugger */
/* eslint-disable consistent-return */
import actionTypes from '../actions/actionTypes';
// import TASKS from '../../services/index';

function taskReducer(tasks = [], action) {
  switch (action.type) {
    case actionTypes.PRINT_TASK:
      return action.task;
    case actionTypes.ADD_TASK:
      return [
        ...tasks,
        action.task
      ];
    case actionTypes.DELETE_TASK:
      return tasks.filter((task) => task.id !== action.task?._id);
    case actionTypes.MODIFY_TASK:
      debugger;
      return tasks.map(
        (task) => (task._id === action.task.id
          ? { ...task, ...action.task.task }
          : task)
      );
    default:
      return tasks;
  }
}
export default taskReducer;
