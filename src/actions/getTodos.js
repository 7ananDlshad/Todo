import { TODO_LIST, triggerReducer } from '../constatnts/todoConstatnts';

export const listTodos = (data) => (dispatch) => {
  dispatch(triggerReducer(TODO_LIST, { data }));
};

export const addTodo = (data) => (dispatch, getState) => {
  const { Todos } = getState();
  const result = [data, ...Todos];
  dispatch(triggerReducer(TODO_LIST, { data: result }));
};

export const deleteTodo = (index) => (dispatch, getState) => {
  const { Todos } = getState();
  Todos.splice(index, 1);
  console.log('should be one item deletes-->', Todos);
  dispatch(triggerReducer(TODO_LIST, { data: Todos }));
};
