/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectChartData = () =>
  createSelector(selectHome, homeState => homeState.get('chartData'));

export {
  selectHome,
  makeSelectChartData
};
