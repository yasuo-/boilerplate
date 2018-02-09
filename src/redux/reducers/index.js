import { combineReducers } from "redux";
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

const reducers = combineReducers({
  init
});

export default reducers;
