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
      labels: ['BTC','LTC','MONA', 'XEM'],
      datasets: [
        {
          data: [50, 20, 10, 20],
          backgroundColor: [
            "#ff6384",
            "#36a2eb",
            "#ffce56",
            "#e3eaa7"
          ],
          hoverBackgroundColor: [
            "#ff6384",
            "#36a2eb",
            "#ffce56",
            "#e3eaa7"
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
