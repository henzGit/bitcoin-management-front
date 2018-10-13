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
import { UPDATE_USER_DATA } from "./constants";

// The initial state of the App
const initialState = fromJS({
  isAuthenticated: false,
  userId: null,
  cookie: '',
  currentUserName: ''
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_DATA:
      return state
        .set('isAuthenticated', action.isAuthenticated)
        .set('userId', action.userId)
        .set('cookie', action.cookie)
        .set('currentUserName', action.currentUserName);
    default:
      return state;
  }
}

export default appReducer;
