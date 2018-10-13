/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const makeSelectUserId = () =>
  createSelector(selectGlobal, globalState => globalState.get('userId'));

const makeSelectCookie = () =>
  createSelector(selectGlobal, globalState => globalState.get('cookie'));

const makeSelectIsAuthenticated = () =>
  createSelector(selectGlobal, globalState => globalState.get('isAuthenticated'));

const makeSelectGlobal = () =>
  createSelector(selectGlobal, globalState => globalState);

export {
  selectGlobal,
  makeSelectGlobal,
  makeSelectCookie,
  makeSelectIsAuthenticated,
  makeSelectUserId
};
