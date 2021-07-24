import React from "react";
import { getAppNames } from "single-spa";
import styles from "./microFrontends.module.scss";

export default function MicroFrontends() {
  const microFrontends = getAppNames();

  return (
    <>
      {microFrontends.map((nome) => (
        <main
          key={nome}
          id={`single-spa-application:${nome}`}
          className={styles.microFrontend}
        ></main>
      ))}
    </>
  );
}
