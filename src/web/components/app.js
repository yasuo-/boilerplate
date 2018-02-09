import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import configureStore from "../../redux/store/configureStore";
import Router from "./router";

const store = configureStore();

export const renderApp = () => (
  <Provider store={store}>
    <HashRouter>
      <Router />
    </HashRouter>
  </Provider>
);

if (module.hot) {
  module.hot.accept("components/App", () => {
    require("components/App");
    ReactDOM.render(renderApp(), root);
  });
}
