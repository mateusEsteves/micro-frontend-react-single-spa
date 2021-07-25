import React from "react";
import Cabecalho from "./components/Cabecalho";
import MenuLateral from "./components/MenuLateral";
import styles from "./app.module.scss";
import MicroFrontends from "./components/MicroFrontends";
import Loader from "./components/Loader";
import { Router } from "react-router-dom";
import history from "./shared/history";

export default function App() {
  return (
    <Router history={history}>
      <div className={styles.app}>
        <Loader />
        <Cabecalho />
        <MenuLateral />
        <MicroFrontends />
      </div>
    </Router>
  );
}
