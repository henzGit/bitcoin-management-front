/*
 *
 * AuthPage actions
 *
 */

import { AUTHENTICATE } from './constants';
import { CHANGE_USERNAME, CHANGE_PASSWORD } from './constants';

export function authenticate(username, password) {
  return {
    type: AUTHENTICATE,
    username,
    password
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {username} username The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {password} password The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_PASSWORD
 */
export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}
