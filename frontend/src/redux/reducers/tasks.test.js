import tasksReducer from './tasksReducer';
import actionTypes from '../actions/actionTypes';

describe('when invoked a tasksReducer func', () => {
  test('should return an array', () => {
    const action = {
      type: actionTypes.PRINT_TASK,
      task: { id: 1, task: 'Josep' }
    };
    const tasks = [];
    const result = tasksReducer(tasks, action);
    expect(result).toEqual({ id: 1, task: 'Josep' });
  });
});
