import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { obterGato } from "../services/gatos";
import styles from "./gato.module.scss";

export default function Gato() {
  const { gatoId } = useParams<any>();
  const [dadosGato, setDadosGato] = useState<any>(null);

  useEffect(() => {
    inicializarDados();
    async function inicializarDados() {
      window.dispatchEvent(new CustomEvent("mostrarLoader"));
      const gato = await obterGato(gatoId);
      setDadosGato(gato);
      window.dispatchEvent(new CustomEvent("esconderLoader"));
    }
  }, [gatoId]);

  useEffect(() => {
    console.log("Montando o componente Gato");

    return () => {
      console.log("Desmontando o componente Gato");
    };
  }, []);

  return dadosGato == null ? (
    <></>
  ) : (
    <div className={styles.container}>
      <img src={dadosGato?.imagem} className={styles.container__imagem} />
      <span className={styles.container__texto}>{dadosGato?.descricao}</span>
    </div>
  );
}
