/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const LOAD_USER_DATA = 'app/HomePage/LOAD_USER_DATA';
export const LOAD_USER_DATA_SUCCESS = 'app/HomePage/LOAD_USER_DATA_SUCCESS';
export const LOAD_USER_DATA_ERROR = 'app/HomePage/LOAD_USER_DATA_ERROR';
