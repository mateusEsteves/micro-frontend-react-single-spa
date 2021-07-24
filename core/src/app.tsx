import React from "react";
import Cabecalho from "./components/Cabecalho";
import MenuLateral from "./components/MenuLateral";
import styles from "./app.module.scss";
import { Router } from "react-router-dom";
import history from "./shared/history";
import MicroFrontends from "./components/MicroFrontends";

export default function App() {
  return (
    <Router history={history}>
      <div className={styles.app}>
        <Cabecalho />
        <MenuLateral />
        <MicroFrontends />
      </div>
    </Router>
  );
}
