/*
 *
 * AuthPage reducer
 *
 */
import { fromJS } from 'immutable';
import { AUTHENTICATE, AUTHENTICATION_SUCCESS, AUTHENTICATION_ERROR }
  from './constants';
import { CHANGE_PASSWORD, CHANGE_USERNAME } from './constants';

export const initialState = fromJS({
  username: '',
  password: '',
  authenticating: false,
  error: false,
});

function AuthPageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state.set('username', action.username);
    case CHANGE_PASSWORD:
      return state.set('password', action.password);
    case AUTHENTICATE:
      return state
        .set('authenticating', true)
        .set('error', false);
    case AUTHENTICATION_SUCCESS:
      return state
        .set('authenticating', false)
        .set('error', false);
    case AUTHENTICATION_ERROR:
      return state
        .set('authenticating', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default AuthPageReducer;
