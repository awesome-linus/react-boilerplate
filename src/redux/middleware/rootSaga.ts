import { delay, takeLatest, put } from 'redux-saga/effects';
import countModule from '../modules/countModule';

function* postAsyncPlusOne() {
  yield delay(2000);
  yield put(countModule.actions.plusOne());
}

export function* rootSaga() {
  yield takeLatest(countModule.actions.postAsyncPlusOne, postAsyncPlusOne);
}

export default rootSaga;
