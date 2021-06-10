/* eslint-disable no-underscore-dangle */
/* eslint-disable no-debugger */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2021/todos';

export function PrintTask() {
  return async (dispatch) => {
    const { data } = await axios(url);
    dispatch({
      type: actionTypes.PRINT_TASK,
      task: data
    });
  };
}
export function addTask(task) {
  return async (dispatch) => {
    const { data } = await axios.post(url, task);
    dispatch({
      type: actionTypes.ADD_TASK,
      task: data
    });
  };
}
export function deleteTask(taskId) {
  return async (dispatch) => {
    debugger;
    await axios.delete(`${url}/${taskId}`);
    dispatch({
      type: actionTypes.DELETE_TASK,
      taskId
    });
  };
}
export function modifyTask(task) {
  return async (dispatch) => {
    const { data } = await axios.put(`${url}/${task.id}`, task);
    dispatch({
      type: actionTypes.MODIFY_TASK,
      task: data
    });
  };
}
