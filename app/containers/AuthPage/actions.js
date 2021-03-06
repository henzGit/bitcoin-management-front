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
export function authenticate() {
  return {
    type: AUTHENTICATE,
  };
}

/**
 * Dispatched when the authentication is successful by the request saga
 *
 * @return {object}
 *  An action object with a type of AUTHENTICATION_SUCCESS
 */
export function authenticationSuccess() {
  return {
    type: AUTHENTICATION_SUCCESS,
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

