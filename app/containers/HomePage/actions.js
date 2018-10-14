/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */


import {
  LOAD_USER_DATA,
  LOAD_USER_DATA_ERROR,
  LOAD_USER_DATA_SUCCESS}
  from "./constants";

/**
 * Load corresponding user data
 *
 * @return {object}    An action object with a type of LOAD_USER_DATA
 */
export function loadUserData() {
  return {
    type: LOAD_USER_DATA,
  };
}

/**
 * Dispatched when the load user data is successful by the request saga
 *
 * @return {object}    An action object with a type of LOAD_USER_DATA_SUCCESS
 */
export function loadUserDataSuccess() {
  return {
    type: LOAD_USER_DATA_SUCCESS,
  };
}

/**
 * Dispatched when the load user data fails by the request saga
 *
 * @param  {object} error The error

 * @return {object}    An action object with a type of LOAD_USER_DATA_ERROR
 */
export function loadUserDataError(error) {
  return {
    type: LOAD_USER_DATA_ERROR,
    error,
  };
}
