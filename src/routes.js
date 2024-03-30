import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Container/Home";
import Orders from "./Container/Orders";

function Routes() {
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/pedidos" component={Orders} />
        
      </Switch>
    </Router>
  );
}

export default Routes;
