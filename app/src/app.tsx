import React from "react";
import { Router } from "react-router";
import { Link, Route, Switch } from "react-router-dom";
// @ts-ignore
import history from "core/history";

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/primeiro-app" exact>
          <div>
            Primeira página <br />
            <Link to="/primeiro-app/pagina-dois">Ir para pagina dois</Link>{" "}
            <br />
            <Link to="/">Ir para home.</Link>
          </div>
        </Route>
        <Route path="/primeiro-app/pagina-dois">
          <div>
            Segunda página <br />
            <Link to="/primeiro-app">Ir para primeira pagina</Link> <br />
            <Link to="/">Ir para home</Link>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
