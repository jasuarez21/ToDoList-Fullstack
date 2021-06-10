/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addTask } from '../redux/actions/actionCreators';

function HeaderToDo({ tasks, dispatch }) {
  function newTask() {
    const newTaskInput = document.getElementById('inputTask');
    return dispatch(addTask({ id: (tasks[tasks.length - 1].id + 1), task: newTaskInput.value }));
  }
  return (
    <>
      <input type="text" id="inputTask" />
      <button data-testid="task-site-modify-button-1" type="button" onClick={() => newTask()}>Add</button>
    </>
  );
}
HeaderToDo.propTypes = {
  tasks: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};
function mapToState(store) {
  return {
    tasks: store.tasks
  };
}
export default connect(mapToState)(HeaderToDo);
