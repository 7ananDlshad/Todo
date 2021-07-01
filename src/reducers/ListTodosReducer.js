import { TODO_LIST, ADD_TODO } from '../constatnts/todoConstatnts';

export const ListTodosReducer = (state = [], action) => {
  const { type, data } = action;

  switch (type) {
    case TODO_LIST: {
      return data;
    }
    default:
      return state;
  }
};

export const addTodo = (state = [], action) => {
  const { type, data } = action;

  switch (type) {
    case ADD_TODO: {
      return [data, ...state];
    }
    default:
      return state;
  }
};
