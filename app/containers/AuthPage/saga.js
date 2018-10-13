/**
 * Authenticate user to an API end point
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { AUTHENTICATE } from './constants';
import { authenticationError, authenticationSuccess } from './actions';

import request from 'utils/request';
import { makeSelectUsername, makeSelectPassword } from './selectors';

/**
 * Auth API request/response handler
 */
export function* callAuthApi() {
  const username = yield select(makeSelectUsername());
  const password = yield select(makeSelectPassword());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL);
    yield put(authenticationSuccess('test_cookie', 'test_id'));
  } catch (err) {
    yield put(authenticationError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* authenticate() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(AUTHENTICATE, callAuthApi);
}
