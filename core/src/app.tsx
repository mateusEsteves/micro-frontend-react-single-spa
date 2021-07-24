import React from "react";
import { getAppNames } from "single-spa";
import Cabecalho from "./components/Cabecalho";
import MenuLateral from "./components/MenuLateral";
import styles from "./app.module.scss";

export default function App() {
  const microFrontends = getAppNames();

  return (
    <div className={styles.app}>
      <Cabecalho />
      <MenuLateral />
      {microFrontends.map((nome) => (
        <main
          key={nome}
          id={`single-spa-application:${nome}`}
          className={styles.app__microFrontend}
        ></main>
      ))}
    </div>
  );
}
