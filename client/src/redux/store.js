// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import initialState from './initialState';
import rootReducer from './reducers/rootReducer';
// Redux-Saga Middleware
import createSagaMiddleware from 'redux-saga';

/**
 *  Configuration to debug reux with  ReduxDevTools
 */
const enhancers = [];
const isDevelopment = process.env.NODE_ENV === 'development';
if (
  isDevelopment &&
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
}

const sagaMiddleware = createSagaMiddleware();

/**
 *  1. This app both ways of initializing Redux state.
 *  It has an initial state passed as the second argument of
 *  createstore but each reducer has an initial state returned
 *  when a reducer recives undefinied
 */

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(sagaMiddleware), ...enhancers)
);

export default store;
