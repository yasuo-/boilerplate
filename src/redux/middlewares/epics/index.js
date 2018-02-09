import { combineEpics } from "redux-observable";
import { fetchApiEpic } from "./fetchApiEpic";

/**
 * epics
 * Middleware using redux-observable around asynchronous
 * We will use it when it can be used around asynchronously
 * @type {Epic<T, S>}
 */
export const rootEpic = combineEpics(fetchApiEpic);
