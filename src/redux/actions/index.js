import { createAction } from "redux-actions";
import { AsyncStorage } from "react-native";

import * as t from "./type";
import * as api from "../../api/authApi";
import { auth, provider } from "../../config/firebase";

/**
 * init
 */
const init = createAction(t.INIT, empty, createErrorMeta);
const empty = () => ({});
const createErrorMeta = message => ({ error: { message: message } });

export default init;

export function decrement(fbToken) {

  return {
    type: t.LOGGED_IN,
    payload: { data: fbToken }
  };
}