import { AsyncStorage } from 'react-native';

import * as t from '../actions/type';

let initialState = { isLoggedIn: false, user: null };

/**
 * authReducer
 * @param {*} state 
 * @param {*} action 
 */
export const isLogin = (state = initialState, action) => {
  switch (action.type) {
    case t.LOGGED_IN:
      console.log("sssss")
      const user = action.payload//.user;
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
}

let initialStateToken = { facebook: null, twitte: null };
export const tokens = (state = initialStateToken, action) => {
  switch (action.type) {
    case 'facebook_token':
      console.log(action)
      state = Object.assign({}, state, { facebook: action.payload });
      return state;
    default:
      return state;
  }
}