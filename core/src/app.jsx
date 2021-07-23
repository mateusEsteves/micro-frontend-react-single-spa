import React from "react";
import { getAppNames } from "single-spa";
import Cabecalho from "./components/Cabecalho";
import MenuLateral from "./components/MenuLateral";

export default function App() {
  const microFrontends = getAppNames();

  return (
    <>
      <Cabecalho />
      <MenuLateral />
      {microFrontends.map((nome) => (
        <div
          key={nome}
          id={`single-spa-application:${nome}`}
          style={{ gridArea: "conteudo" }}
        ></div>
      ))}
    </>
  );
}
