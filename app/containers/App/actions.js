/*
 * App Actions
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

import {UPDATE_USER_DATA} from "./constants";
import { LOGOUT } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {object} userData Object containing user data
 *
 * @return {object}    An action object with a type of UPDATE_USER_DATA
 */
export function updateUserData (userData) {
  return {
    type: UPDATE_USER_DATA,
    userData
  };
}

/**
 * Logout from application
 *
 * @return {object}    An action object with a type of LOGOUT
 */
export function logout() {
  return {
    type: LOGOUT,
  };
}

