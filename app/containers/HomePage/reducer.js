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
import {LOAD_USER_DATA} from "./constants";
import {LOAD_USER_DATA_ERROR} from "./constants";

// The initial state of the App
export const initialState = fromJS({
  isLoadingUserData: false,
  errorLoadingUserData: null
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_DATA:
      return state
        .set('isLoadingUserData', true);
    case LOAD_USER_DATA_ERROR:
      return state
        .set('isLoadingUserData', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default homeReducer;
