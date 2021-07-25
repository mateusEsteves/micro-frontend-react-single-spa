import React from "react";
import Cabecalho from "./components/Cabecalho";
import MenuLateral from "./components/MenuLateral";
import styles from "./app.module.scss";
import MicroFrontends from "./components/MicroFrontends";
import Loader from "./components/Loader";

export default function App() {
  return (
    <div className={styles.app}>
      <Loader />
      <Cabecalho />
      <MenuLateral />
      <MicroFrontends />
    </div>
  );
}
