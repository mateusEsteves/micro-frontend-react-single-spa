import React from "react";
import imagem from '../assets/samoieda.jpg';
import Cachorro from "../Cachorro";

export default function Samoieda() {
  return (
    <Cachorro imagem={imagem} descricao={'Este é um cão adulto da raça Samoieda'} />
  );
}
