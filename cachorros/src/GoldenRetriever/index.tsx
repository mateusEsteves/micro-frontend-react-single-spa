import React from "react";
import imagem from "../assets/golden-retriever.jpg";
import Cachorro from "../Cachorro";

export default function GoldenRetriever() {
  return (
    <Cachorro
      imagem={imagem}
      descricao={
        "Esta é uma foto de uma reunião de cães da raça Golden Retriever"
      }
    />
  );
}
