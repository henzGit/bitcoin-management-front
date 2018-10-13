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

/**
 * Changes the input field of the form
 *
 * @param  {boolean} isAuthenticated Status indicating if user is
 *  already authenticated or not
 * @param  {int} userId Id of current user
 * @param  {string} cookie Cookie String of current user
 *
 * @return {object}    An action object with a type of UPDATE_USER_DATA
 */
export function updateUserData(isAuthenticated, userId, cookie) {
  return {
    type: UPDATE_USER_DATA,
    isAuthenticated,
    userId,
    cookie
  };
}

