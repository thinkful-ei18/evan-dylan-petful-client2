import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import catReducer from "./reducers/cat";
import dogReducer from './reducers/dog';

const store = createStore(
  combineReducers({
    cat: catReducer,
    dog: dogReducer
  }),
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
