import { delay, put, takeLatest } from '@redux-saga/core/effects';
import { putResults, startLoading, SUBMIT_FORM } from './actions';

// eslint-disable-next-line no-unused-vars
function* request(action) {
  // pretend I am making an axios post request and then handling errors and stuff,
  // with additional redux action types
  yield put(startLoading());
  yield delay(500);
  yield put(putResults(['listing1', 'listing2']));
}

export default function* searchSaga() {
  yield takeLatest(SUBMIT_FORM, request);
}
