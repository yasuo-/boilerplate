import { createAction } from "redux-actions";
import types from "./type";

/**
 * init
 */
const init = createAction(types.INIT, empty, createErrorMeta);
const empty = () => ({});
const createErrorMeta = message => ({ error: { message: message } });

export default init;
