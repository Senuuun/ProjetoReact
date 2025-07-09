import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Produtos.css";

export default function Produtos() {
  const navigate = useNavigate();

  const produtosIniciais = [
    {
      id: 1,
      nome: "Arroz Branco",
      preco: 23.49,
      estoque: 30,
      imagem: "/imagens/produtos/arroz.jpg",
      descricao: "Arroz branco polido, ideal para o dia a dia."
    },
    {
      id: 2,
      nome: "Feijão Carioca",
      preco: 9.99,
      estoque: 40,
      imagem: "/imagens/produtos/feijao.jpg",
      descricao: "Feijão carioca de alta qualidade, grãos selecionados."
    },
    {
      id: 3,
      nome: "Vinagre - 750ml",
      preco: 7.89,
      estoque: 50,
      imagem: "/imagens/produtos/vinagre.jpg",
      descricao: "Vinagre de maçã, ideal para cozinhar e frituras."
    },
    {
      id: 4,
      nome: "Leite Integral",
      preco: 4.99,
      estoque: 35,
      imagem: "/imagens/produtos/leite.jpg",
      descricao: "Leite integral pasteurizado, fonte de cálcio e vitaminas."
    },
    {
      id: 5,
      nome: "Pão de Forma Tradicional",
      preco: 6.49,
      estoque: 20,
      imagem: "/imagens/produtos/pao.jpg",
      descricao: "Pão de forma macio e saboroso, ideal para lanches."
    },
    {
      id: 6,
      nome: "Sabonete Neutro",
      preco: 2.49,
      estoque: 60,
      imagem: "/imagens/produtos/sabonete.jpg",
      descricao: "Sabonete neutro para todos os tipos de pele."
    },
    {
      id: 7,
      nome: "Detergente Líquido",
      preco: 3.29,
      estoque: 45,
      imagem: "/imagens/produtos/detergente.jpg",
      descricao: "Detergente para louças com alto poder de limpeza."
    },
    {
      id: 8,
      nome: "Refrigerante Cola - 2L",
      preco: 8.99,
      estoque: 25,
      imagem: "/imagens/produtos/refrigerante.jpg",
      descricao: "Refrigerante sabor cola, embalagem de 2 litros."
    }
  ];

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const estoqueLocal = localStorage.getItem("estoque");
    if (estoqueLocal) {
      setProdutos(JSON.parse(estoqueLocal));
    } else {
      setProdutos(produtosIniciais);
      localStorage.setItem("estoque", JSON.stringify(produtosIniciais));
    }
  }, []);

  function verDetalhes(id) {
    navigate(`/produtos/${id}`);
  }

  return (
    <div className="produtos">
      {produtos.map((p) => (
        <div
          className="produto-card"
          key={p.id}
          onClick={() => verDetalhes(p.id)}
        >
          <img src={p.imagem} alt={p.nome} />
          <h3>{p.nome}</h3>
          <p>R$ {p.preco.toFixed(2)}</p>
          <p>Estoque: {p.estoque}</p>
        </div>
      ))}
    </div>
  );
}
