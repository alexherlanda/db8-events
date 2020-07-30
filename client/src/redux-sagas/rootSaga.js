import { fork, all } from 'redux-saga/effects';
import * as eventsSagas from '../redux-sagas/eventsSagas';

export default function* rootSaga() {
  yield all([...Object.values(eventsSagas)].map(fork));
}