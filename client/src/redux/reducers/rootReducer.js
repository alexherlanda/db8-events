import { combineReducers } from 'redux';
import lngReducer from '../reducers/lngReducer';
import eventsReducer from '../reducers/eventsReducer'

const rootReducer = combineReducers({
  language: lngReducer,
  events: eventsReducer, 
});

export default rootReducer;
