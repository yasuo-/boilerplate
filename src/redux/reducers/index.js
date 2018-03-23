import { combineReducers } from "redux";
import * as authReducer from "./authReducer"
import * as homeReducer from "./homeReducer"
import * as types from "../actions/type";

const init = (state = {}, action) => {
  switch (action.type) {
    case types.INIT:
      return Object.assign({}, state, {
        type: action.type,
        payload: action.payload
      });
    default:
      return state;
  }
};

/**
 * rootReducer
 * Combine all the reducers
 */
const rootReducer = combineReducers({
  init,
  authReducer,
  homeReducer
});

export default rootReducer;
