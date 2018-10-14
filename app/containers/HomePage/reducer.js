/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';
import {LOAD_USER_DATA, LOAD_USER_DATA_SUCCESS} from "./constants";
import {LOAD_USER_DATA_ERROR} from "./constants";

// The initial state of the App
export const initialState = fromJS({
  isLoadingUserData: false,
  errorLoadingUserData: null,
  chartData: null
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_DATA:
      return state
        .set('isLoadingUserData', true)
        .set('errorLoadingUserData', null)
        .set('chartData', null);
    case LOAD_USER_DATA_ERROR:
      return state
        .set('isLoadingUserData', false)
        .set('error', action.error)
        .set('chartData', null);
    case LOAD_USER_DATA_SUCCESS:
      return state
      .set('isLoadingUserData', false)
      .set('error', null)
      .set('chartData', action.chartData);
    default:
      return state;
  }
}

export default homeReducer;
