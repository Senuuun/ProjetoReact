import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Produtos.css";

export default function Produtos() {
  const navigate = useNavigate();

  const produtosIniciais = [
    {
      id: 1,
      nome: "Arroz Branco Tipo 1 - 5kg",
      preco: 23.49,
      estoque: 30,
      imagem: "/imagens/arroz.jpg",
      descricao: "Arroz branco polido, ideal para o dia a dia. Pacote com 5kg."
    },
    {
      id: 2,
      nome: "Feijão Carioca - 1kg",
      preco: 9.99,
      estoque: 40,
      imagem: "/imagens/feijao.jpg",
      descricao: "Feijão carioca de alta qualidade, grãos selecionados."
    },
    {
      id: 3,
      nome: "Óleo de Soja - 900ml",
      preco: 7.89,
      estoque: 50,
      imagem: "/imagens/oleo.jpg",
      descricao: "Óleo vegetal de soja, ideal para cozinhar e frituras."
    },
    {
      id: 4,
      nome: "Leite Integral - 1L",
      preco: 4.99,
      estoque: 35,
      imagem: "/imagens/leite.jpg",
      descricao: "Leite integral pasteurizado, fonte de cálcio e vitaminas."
    },
    {
      id: 5,
      nome: "Pão de Forma Tradicional",
      preco: 6.49,
      estoque: 20,
      imagem: "/imagens/pao.jpg",
      descricao: "Pão de forma macio e saboroso, ideal para lanches."
    },
    {
      id: 6,
      nome: "Sabonete Neutro - 90g",
      preco: 2.49,
      estoque: 60,
      imagem: "/imagens/sabonete.jpg",
      descricao: "Sabonete neutro para todos os tipos de pele. 90 gramas."
    },
    {
      id: 7,
      nome: "Detergente Líquido - 500ml",
      preco: 3.29,
      estoque: 45,
      imagem: "/imagens/detergente.jpg",
      descricao: "Detergente para louças com alto poder de limpeza."
    },
    {
      id: 8,
      nome: "Refrigerante Cola - 2L",
      preco: 8.99,
      estoque: 25,
      imagem: "/imagens/refrigerante.jpg",
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
