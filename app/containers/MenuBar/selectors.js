/**
 * MenuBar selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMenu = state => state.get('menu', initialState);

const makeSelectItems = () =>
  createSelector(selectMenu, menuState => menuState.get('items'));

export {
  selectMenu,
  makeSelectItems,
};
