/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAuth = state => state.get('auth', initialState);

const makeSelectUsername = () =>
  createSelector(selectAuth, authState => authState.get('username'));

export { selectAuth, makeSelectUsername};
