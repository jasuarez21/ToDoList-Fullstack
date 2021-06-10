/* eslint-disable no-underscore-dangle */
/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './taskSite.css';
import { PrintTask, deleteTask, modifyTask } from '../redux/actions/actionCreators';

function TaskSite({ tasks, dispatch }) {
  useEffect(() => {
    if (!tasks.length) dispatch(PrintTask());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function trashTask(taskId) {
    dispatch(deleteTask(taskId));
  }

  function doneTask(taskId) {
    const classDone = document.getElementById(taskId);
    classDone.classList = 'done';
    const buttonDone = document.getElementById(`button${taskId}`);
    buttonDone.style.background = 'green';
  }

  function modifyClickTask(taskId) {
    const newTaskInput = document.getElementById('inputTask');
    return dispatch(modifyTask({ id: taskId, task: newTaskInput?.value || '' }));
  }
  return tasks.length
    ? tasks.map((task) => (
      <>
        <p id={task.id} data-testid={`task-${task.id}`}>
          {task.task}
        </p>
        <button
          type="button"
          id={`buttonDelete${task.id}`}
          onClick={() => trashTask(task._id)}
        >
          Delete
        </button>
        <button
          type="button"
          id={`button${task.id}`}
          onClick={() => { doneTask(task.id); }}
          data-testid={`done-button-${task.id}`}
        >
          Done
        </button>
        <button
          type="button"
          id={`buttonModify${task.id}`}
          onClick={() => { modifyClickTask(task._id); }}
          data-testid={`task-site-modify-button-${task.id}`}
        >
          Modify
        </button>
      </>
    ))
    : <p>No Tasks</p>;
}
TaskSite.propTypes = {
  tasks: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    tasks: store.tasks,
  };
}

export default connect(mapStateToProps)(TaskSite);
