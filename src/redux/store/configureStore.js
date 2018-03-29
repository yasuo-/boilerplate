import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
// import createLogger from 'redux-logger'

import { rootEpic } from "../middlewares/epics";
import rootReducer from "../reducers/index";

// const logger = createLogger()
const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore(
  rootReducer,
  compose(applyMiddleware(
    // logger,
    epicMiddleware
  ))
);

export default store;
