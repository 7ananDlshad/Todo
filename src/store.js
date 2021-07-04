import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ListTodosReducer } from './reducers/ListTodosReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const middilware = [thunk];

const Reducers = combineReducers({
  Todos: ListTodosReducer,
});

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todos');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todos', serializedState);
  } catch {
    // ignore write errors
  }
};

const persistedState = loadState();

const Store = createStore(
  Reducers,
  persistedState,
  composeWithDevTools(applyMiddleware(...middilware))
);

Store.subscribe(() => {
  saveState({
    Todos: Store.getState().Todos,
  });
});

export default Store;
