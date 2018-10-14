/*
 * AppReducer
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
import { UPDATE_USER_DATA, LOGOUT } from "./constants";

// The initial state of the App
const initialState = fromJS({
  isAuthenticated: false,
  userId: null,
  currentUserName: ''
});

function AppReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_DATA:
      return state
        .set('isAuthenticated', action.userData.isAuthenticated)
        .set('userId', action.userData.userId)
        .set('currentUserName', action.userData.currentUserName);
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export default AppReducer;
