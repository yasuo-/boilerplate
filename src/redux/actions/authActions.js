import { createAction } from "redux-actions";
import { AsyncStorage } from "react-native";

import * as t from "./type";
import * as api from "../../api/authApi";
import { auth } from "../../config/firebase";

/**
 * register
 * @param {*} data 
 * @param {*} successCB 
 * @param {*} errorCB 
 */
export const register = (data, successCB, errorCB) => (
  dispatch => (
    api.register(data, (success, data, error) => {
      if (success) successCB(data);
      else if (error) errorCB(error)
    });
  )
)

/**
 * createUser
 * @param {*} user 
 * @param {*} successCB 
 * @param {*} errorCB 
 */
export const createUser = (user, successCB, errorCB) => (
  dispatch => (
    api.createUser(user, (success, data, error) => {
      if (success) {
        dispatch({ type: t.LOGGED_IN, payload: user });
        successCB();
      } else if (error) errorCB(error)
    });
  )
)

/**
 * login
 * @param {*} data 
 * @param {*} successCB 
 * @param {*} errorCB 
 */
export const login = (data, successCB, errorCB) => (
  dispatch => (
    api.login(data, (success, data, error) => {
      if (success) {
        if (data.exists) dispatch({ type: t.LOGGED_IN, payload: data.user });
        successCB(data);
      } else if (error) errorCB(error);
    });
  )
)

/**
 * resetPassword
 * @param {*} data 
 * @param {*} successCB 
 * @param {*} errorCB 
 */
export const resetPassword = (data, successCB, errorCB) => (
  dispatch => (
    api.resetPassword(data, (success, data, error) => {
      if (success) successCB();
      else if (error) errorCB(error);
    });
  )
)

/**
 * signOut
 * @param {*} successCB 
 * @param {*} errorCB 
 */
export const signOut = (successCB, errorCB) => (
  dispatch => (
    api.signOut((success, data, error) => {
      if (success) {
        dispatch({ type: t.LOGGED_OUT });
        successCB();
      } else if (error) errorCB(error)
    });
  )
)

/**
 * checkLoginStatus
 * @param {*} user 
 */
export const checkLoginStatus = (user) => (
  dispatch => (
    auth.onAuthStateChanged((user) => {
      let isLoggedIn = (user !== null);

      if (isLoggedIn) {
        // get the user object from the Async storage
        AsyncStorage.getItem('user', (err, user) => {
          if (user === null) isLoggedIn = false
          else dispatch({ type: t.LOGGED_IN, payload: JSON.parse(user) })

          callback(isLoggedIn);
        });

      } else {
        dispatch({ type: t.LOGGED_OUT });
        callback(isLoggedIn);
      }
    });
  )
)

/**
 * signInWithFacebook
 * @param {*} fbToken 
 * @param {*} successCB 
 * @param {*} errorCB 
 */
export const signInWithFacebook = (fbToken, successCB, errorCB) => (
  dispatch => (
    api.signInWithFacebook(fbToken, (success, data, error) => {
      if (success) {
        if (data.exists) dispatch({ type: t.LOGGED_IN, payload: data.user });
        successCB(data);
      } else if (error) errorCB(error)
    });
  )
)