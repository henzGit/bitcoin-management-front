/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const makeSelectUserId = () =>
  createSelector(selectGlobal, globalState => globalState.get('userId'));

const makeSelectIsAuthenticated = () =>
  createSelector(selectGlobal, globalState => globalState.get('isAuthenticated'));

const makeSelectCurrentUserName = () =>
  createSelector(selectGlobal, globalState => globalState.get('currentUserName'));

const makeSelectGlobal = () =>
  createSelector(selectGlobal, globalState => globalState);

export {
  selectGlobal,
  makeSelectGlobal,
  makeSelectIsAuthenticated,
  makeSelectUserId,
  makeSelectCurrentUserName
};
