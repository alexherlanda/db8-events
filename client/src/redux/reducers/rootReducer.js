import { combineReducers } from 'redux';
import lngReducer from '../reducers/lngReducer';

const rootReducer = combineReducers({
  lngReducer: lngReducer,
});

export default rootReducer;
