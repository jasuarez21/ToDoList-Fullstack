import axios from 'axios';
import {
  PrintTask,
  addTask,
  deleteTask,
  modifyTask
} from './actionCreators';

jest.mock('axios');
jest.mock('./actionTypes');

describe('When invoked a printask func', () => {
  test('should return and async function', async () => {
    axios.mockResolvedValueOnce({ data: 'Emerson' });
    const dispatch = jest.fn();
    await PrintTask()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('When invoked a addTask func', () => {
  test('should call a async func', async () => {
    axios.post.mockResolvedValueOnce({ data: 'Pepe' });
    const dispatch = jest.fn();
    await addTask()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('When invoked a deleteTask', () => {
  test('should call a async func', async () => {
    axios.delete.mockResolvedValueOnce({ data: 'Fernando' });
    const dispatch = jest.fn();
    await deleteTask()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('When invoked a modifyTask', () => {
  test('should call a async func', async () => {
    const task = {
      id: 1,
      task: 'Anna'
    };
    axios.put.mockResolvedValueOnce({ data: 'Irene' });
    const dispatch = jest.fn();
    await modifyTask(task)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});
