import React from "react";
import { Link } from "react-router-dom";
import styles from "./menuLateral.module.scss";

export default function MenuLateral() {
  return (
    <aside className={styles.menuLateral}>
      <ul>
        <li>Cães:</li>
        <ul>
          <li>
            <Link to={"/cachorros/samoieda"}>Samoieda</Link>
          </li>
          <li>
            <Link to={"/cachorros/corgi"}>Corgi</Link>
          </li>
          <li>
            <Link to={"/cachorros/golden-retriever"}>Golden Retriever</Link>
          </li>
        </ul>
        <li>Gatos:</li>
        <ul>
          <li>
            <Link to={"/gatos/1"}>Um gato</Link>
          </li>
          <li>
            <Link to={"/gatos/2"}>Outro gato</Link>
          </li>
          <li>
            <Link to={"/gatos/3"}>Mais um gato</Link>
          </li>
        </ul>
      </ul>
    </aside>
  );
}
