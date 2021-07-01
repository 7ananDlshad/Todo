import {
  TODO_LIST,
  ADD_TODO,
  triggerReducer,
} from '../constatnts/todoConstatnts';

export const listTodos = (data) => (dispatch) => {
  dispatch(triggerReducer(TODO_LIST, { data }));
};

export const addTodo = (data) => (dispatch) => {
  dispatch(triggerReducer(ADD_TODO, { data }));
};
