import React from "react";
import styles from "./cabecalho.module.scss";

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <span className={styles.cabecalho__titulo}>Micro front-ends</span>
    </header>
  );
}
