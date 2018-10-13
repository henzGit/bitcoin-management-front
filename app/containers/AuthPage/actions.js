/*
 *
 * AuthPage actions
 *
 */
import {
  AUTHENTICATE,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_ERROR,
  REDIRECT_TO_HOME
} from './constants';
import { CHANGE_USERNAME, CHANGE_PASSWORD } from './constants';

/**
 * Authenticate user, this action starts the request saga
 *
 * @return {object} An action object with a type of AUTHENTICATE
 */
export function authenticate(username, password) {
  return {
    type: AUTHENTICATE,
    username,
    password
  };
}

/**
 * Dispatched when the authentication is successful by the request saga
 *
 * @param  {cookie} cookie The repository data
 * @param  {int} userId The current username
 *
 * @return {object}
 *  An action object with a type of AUTHENTICATION_SUCCESS
 */
export function authenticationSuccess(cookie, userId ) {
  return {
    type: AUTHENTICATION_SUCCESS,
    cookie,
    userId,
  };
}

/**
 * Dispatched when authentication fails
 *
 * @param  {object} error The error
 *
 * @return {object}
 *  An action object with a type of AUTHENTICATION_ERROR passing the error
 */
export function authenticationError(error) {
  return {
    type: AUTHENTICATION_ERROR,
    error,
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

/**
 * Dispatched when authentication is successful
 *
 * @return {object}
 *  An action object with a type of REDIRECT_TO_HOME
 */
export function redirectToHome() {
  return { type: REDIRECT_TO_HOME };
}

