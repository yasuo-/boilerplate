import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
// import createLogger from 'redux-logger'

import { rootEpic } from "../middlewares/epics";
import reducers from "../reducers/index";

// const logger = createLogger()
const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore(
  reducers,
  applyMiddleware(
    // logger,
    epicMiddleware
  )
);

export default () => store;
