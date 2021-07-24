import React from "react";
import imagem from '../assets/corgi.jpg';
import Cachorro from "../Cachorro";

export default function Corgi() {
  return (
    <Cachorro imagem={imagem} descricao={'Este é um cão adulto da raça Corgi'} />
  );
}
