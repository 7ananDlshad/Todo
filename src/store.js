import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ListTodosReducer } from './reducers/ListTodosReducer';

const intialState = {};
const middleware = [thunk];
const Reducers = combineReducers({
  listTodos: ListTodosReducer,
});

const Store = createStore(
  Reducers,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
