/**
 * Authpage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAuth = state => state.get('auth', initialState);

const makeSelectUsername = () =>
  createSelector(selectAuth, authState => authState.get('username'));

const makeSelectPassword = () =>
  createSelector(selectAuth, authState => authState.get('password'));

const makeSelectAuthenticating = () =>
  createSelector(selectAuth, authState => authState.get('authenticating'));

const makeSelectError = () =>
  createSelector(selectAuth, authState => authState.get('error'));

export {
  selectAuth,
  makeSelectUsername,
  makeSelectPassword,
  makeSelectAuthenticating,
  makeSelectError
};
