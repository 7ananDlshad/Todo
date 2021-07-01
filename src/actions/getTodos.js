import {
  TODOS_LIST_REQUEST,
  TODOS_LIST_SUCCESS,
  TODOS_LIST_FAIL,
  TODOS_LIST_RESET,
} from '../constatnts/todoConstatnts';

export const listTodos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: TODOS_LIST_REQUEST,
    });
    const data = JSON.parse(localStorage.getItem('todos'));
    dispatch({
      type: TODOS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TODOS_LIST_FAIL,
      payload: 'Eror getting data from local storage',
    });
  }
};
