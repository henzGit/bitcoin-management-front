/*
 *
 * AuthPage reducer
 *
 */
import { fromJS } from 'immutable';
import { AUTHENTICATE } from './constants';
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
    default:
      return state;
  }
}

export default AuthPageReducer;
