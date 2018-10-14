/**
 * Load user data for Home Page
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import {LOAD_USER_DATA} from './constants';
import {
  loadUserDataSuccess,
  loadUserDataError,
} from './actions';

import request from 'utils/request';
import { updateUserData}  from '../App/actions';
import { Cookies } from 'react-cookie';
import { push } from 'react-router-redux';

/**
 * Auth API request/response handler
 */
export function* callApiGetUserDataForHomePage() {

  const cookies = new Cookies();
  const cookie = cookies.get('siteCookie');

  // redirect to Auth Page
  if (typeof cookie === "undefined" ||
    typeof cookie.userId === "undefined" ||
    typeof cookie.authId === "undefined") {
      yield put(push('/auth'));
      return;
  }

  const requestURL =
    `https://api.github.com/users/henzGit/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL);
    const userData = {
      isAuthenticated: true,
      userId: 1,
      currentUserName: 'great Henz'
    };
    const chartData = {
      labels: ['A','B','C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
    yield put(loadUserDataSuccess(chartData));
    yield put(updateUserData(userData));
  } catch (err) {
    yield put(loadUserDataError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* loadUserData() {
  yield takeLatest(LOAD_USER_DATA, callApiGetUserDataForHomePage );
}
