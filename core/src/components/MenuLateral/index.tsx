import React from "react";
import Link from "../Link";
import styles from "./menuLateral.module.scss";

interface Links {
  url: string;
  titulo: string;
}

const linksGatos = [
  {
    url: "/gatos/1",
    titulo: "Um gato",
  },
  {
    url: "/gatos/2",
    titulo: "Outro gato",
  },
  {
    url: "/gatos/3",
    titulo: "Mais um gato",
  },
];

const linksCachorros = [
  {
    url: "/cachorros/samoieda",
    titulo: "Samoieda",
  },
  {
    url: "/cachorros/corgi",
    titulo: "Corgi",
  },
  {
    url: "/cachorros/golden-retriever",
    titulo: "Golden Retriever",
  },
];

function gerarLinks(links: Links[]) {
  return links.map(({ url, titulo }) => (
    <li>
      <Link to={url} singleSpa={true}>
        {titulo}
      </Link>
    </li>
  ));
}

export default function MenuLateral() {
  return (
    <aside className={styles.menuLateral}>
      <ul>
        <li>Cães:</li>
        <ul>{gerarLinks(linksCachorros)}</ul>
        <li>Gatos:</li>
        <ul>{gerarLinks(linksGatos)}</ul>
      </ul>
    </aside>
  );
}
