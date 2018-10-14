import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOGOUT } from '../App/constants';

import { push } from 'react-router-redux';
import { Cookies } from 'react-cookie';

/**
 * Clear browser cookies
 */
export function* clearCookies() {
  const cookies = new Cookies();
  cookies.remove('authId');
  cookies.remove('currentUserName');
  yield put(push('/auth'));
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* logout() {
  yield takeLatest(LOGOUT, clearCookies);
}
