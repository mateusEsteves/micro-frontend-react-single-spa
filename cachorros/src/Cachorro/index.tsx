import React from "react";
import styles from "./cachorro.module.scss";

interface CachorroProps {
  imagem: any;
  descricao: string;
}

export default function Cachorro({ imagem, descricao }: CachorroProps) {
  return (
    <div className={styles.container}>
      <img src={imagem} className={styles.container__imagem} />
      <span className={styles.container__texto}>{descricao}</span>
    </div>
  );
}
