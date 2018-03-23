import { AsyncStorage } from 'react-native';

import * as t from '../actions/type';

let initialState = { isLoggedIn: false, user: null };

/**
 * authReducer
 * @param {*} state 
 * @param {*} action 
 */
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.LOGGED_IN:
      const user = action.payload;
      // Save token and data to Asyncstorage
      AsyncStorage.multiSet([
        ['user', JSON.stringify(user)]
      ]);

      state = Object.assign({}, state, { isLoggedIn: true, user });
      return state;

    case t.LOGGED_OUT:
      let keys = ['user'];
      // Remove token and data to Asyncstorage
      AsyncStorage.multiRemove(keys);

      state = Object.assign({}, state, initialState);
      return state;

    default:
      return state;
  }
};

export default authReducer;