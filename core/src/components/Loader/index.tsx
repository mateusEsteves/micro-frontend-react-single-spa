import React, { useEffect, useState } from "react";
import styles from "./loader.module.scss";

export default function Loader() {
  const [deveExibir, setDeveExibir] = useState(true);

  useEffect(() => {
    const mostrarLoader = () => setDeveExibir(true);
    const esconderLoader = () => setDeveExibir(false);

    window.addEventListener("mostrarLoader", mostrarLoader);
    window.addEventListener("esconderLoader", esconderLoader);

    return () => {
      window.removeEventListener("mostrarLoader", mostrarLoader);
      window.removeEventListener("esconderLoader", esconderLoader);
    };
  }, [setDeveExibir]);

  return deveExibir ? (
    <div className={styles.loader}>
      <span className={styles.loader__texto}>Carregando...</span>
    </div>
  ) : (
    <></>
  );
}
