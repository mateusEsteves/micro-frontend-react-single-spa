import { useState } from "react";
import gato1 from "../assets/gato-1.jpg";
import gato2 from "../assets/gato-2.jpg";
import gato3 from "../assets/gato-3.jpg";

const Gatos = [
  {
    imagem: gato1,
    descricao: "Este é um gato.",
  },
  {
    imagem: gato2,
    descricao: "Este é outro gato.",
  },
  {
    imagem: gato3,
    descricao: "Aqui vemos um terceiro gato",
  },
];

export function obterGato(gatoId: number): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(Gatos[gatoId - 1]), 2000);
  });
}