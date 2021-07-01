import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ListTodosReducer } from './reducers/ListTodosReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const middilware = [thunk];
const intialState = {};

const Reducers = combineReducers({
  Todos: ListTodosReducer,
});

const Store = createStore(
  Reducers,
  intialState,
  composeWithDevTools(applyMiddleware(...middilware))
);
export default Store;
