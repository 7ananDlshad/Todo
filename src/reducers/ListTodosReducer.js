import { TODO_LIST } from '../constatnts/todoConstatnts';

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
