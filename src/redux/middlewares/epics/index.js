import { combineEpics } from "redux-observable";
import { authEpics } from "./authEpics";

/**
 * epics
 * Middleware using redux-observable around asynchronous
 * We will use it when it can be used around asynchronously
 * @type {Epic<T, S>}
 */
export const rootEpic = combineEpics(authEpics);
