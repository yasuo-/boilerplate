import React from "react";
import { Switch, Route } from "react-router-dom";

//import Top from "./pages/TopPage";
//import NotFoundPage from "./pages/NotFoundPage";

class Router extends React.Component {
  render() {
    return (
      <div className="l-fit bc-primary">
        <Switch>
          {/*<Route exact path="/" component={Top} />
          <Route component={NotFoundPage} />*/}
          <p>ddd</p>
        </Switch>
      </div>
    );
  }
}

export default Router;
