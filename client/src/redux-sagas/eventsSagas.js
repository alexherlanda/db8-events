import {  call, put, throttle } from 'redux-saga/effects';
import {LIST_EVENTS_REQUEST, listEventsSuccess, listEventsFail, } from '../redux/actions/eventsActions' 
import {listEvents} from '../services/events'

function* listEventsRequestAsyncOrchestrator(action) {
  const {payload} = action
  
  try {
    const response = yield call(listEvents, payload);
    if (typeof response !== 'undefined' && response.status === 200) {
      yield put(listEventsSuccess(response.data))
    } else {
     yield put(listEventsFail())
    }
  } catch (error) {
    yield put(listEventsFail())
    console.error('error', error);
  }
}

/**
 *By using this helper won't start a new listEventsRequestAsyncOrchestrator task for 1500ms,
  but in the same time it will still be accepting the latest 
  LIST_EVENTS_REQUEST actions into its underlaying buffer, 
  so it'll miss all LIST_EVENTS_REQUEST actions happening in-between. 
   his ensures that the Saga will take at most one LIST_EVENTS_REQUEST action during each period
 */
export function* watchSetActivePlace() {
  yield throttle(1500, LIST_EVENTS_REQUEST, listEventsRequestAsyncOrchestrator);
}