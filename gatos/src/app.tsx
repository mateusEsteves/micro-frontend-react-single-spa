import React from "react";
import { Redirect, Router } from "react-router";
import { Route, Switch } from "react-router-dom";
// @ts-ignore
import history from "core/history";
import Gato from "./Gato";

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/gatos/:gatoId" component={Gato} />
        <Route path="/gatos" exact>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}
