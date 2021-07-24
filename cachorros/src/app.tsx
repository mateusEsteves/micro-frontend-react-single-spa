import React from "react";
import { Redirect, Router } from "react-router";
import { Route, Switch } from "react-router-dom";
// @ts-ignore
import history from "core/history";
import GoldenRetriever from "./GoldenRetriever";
import Samoieda from "./Samoieda";
import Corgi from "./Corgi";

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/cachorros/golden-retriever" component={GoldenRetriever} />
        <Route path="/cachorros/samoieda" component={Samoieda} />
        <Route path="/cachorros/corgi" component={Corgi} />
        <Route path="/cachorros" exact>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}
