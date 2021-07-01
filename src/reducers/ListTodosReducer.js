import {
  TODOS_LIST_REQUEST,
  TODOS_LIST_SUCCESS,
  TODOS_LIST_FAIL,
  TODOS_LIST_RESET,
} from '../constatnts/todoConstatnts';

export const ListTodosReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case TODOS_LIST_REQUEST:
      return { loading: true };
    case TODOS_LIST_SUCCESS:
      return { loading: false, todos: action.payload };
    case TODOS_LIST_FAIL:
      return { loading: false, error: action.payload };
    case TODOS_LIST_RESET:
      return { todos: [] };
    default:
      return state;
  }
};
