/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen, fireEvent } from '../utils/test-utils';
import Header from './Header';
import { addTask } from '../redux/actions/actionCreators';
import actionTypes from '../redux/actions/actionTypes';

jest.mock('../redux/actions/actionCreators');

describe('when invoked a header component', () => {
  test('then return and teamplate', () => {
    render(<Header />, { initialState: { tasks: [{ id: 20 }] } });
    addTask.mockImplementationOnce(() => ({ type: actionTypes.ADD_TASK }));
    fireEvent.click(screen.getByText(/Add/i));
    expect(addTask).toHaveBeenCalled();
  });
});
