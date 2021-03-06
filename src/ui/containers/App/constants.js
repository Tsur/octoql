/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';
export const CHANGE_RESOURCE_SELECTED = 'octoql/App/CHANGE_RESOURCE_SELECTED';
export const ADD_RESOURCE = 'octoql/App/ADD_RESOURCE';
export const SAVE_NOTEBOOKS = 'octoql/App/SAVE_NOTEBOOKS';
export const REMOVE_NOTIFICATION = 'octoql/App/REMOVE_NOTIFICATION';
