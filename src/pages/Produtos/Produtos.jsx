import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Produtos.css";

export default function Produtos() {
  const navigate = useNavigate();

  const produtosIniciais = [
    {
      id: 1,
      nome: "Sobretudo Masculino",
      preco: 199.90,
      estoque: 5,
      imagem: "/imagens/sobretudo.jpg",
      descricao: "Sobretudo de lã com corte clássico. Ideal para dias frios."
    },
    {
      id: 2,
      nome: "Camiseta Preta Básica",
      preco: 49.90,
      estoque: 10,
      imagem: "/imagens/camiseta-preta.jpg",
      descricao: "Camiseta de algodão confortável, ideal para o dia a dia."
    },
    {
      id: 3,
      nome: "Calça Jeans Slim",
      preco: 129.90,
      estoque: 8,
      imagem: "/imagens/calca-jeans.jpg",
      descricao: "Calça jeans com modelagem slim. Versátil e moderna."
    },
    {
      id: 4,
      nome: "Vestido Floral Verão",
      preco: 149.90,
      estoque: 6,
      imagem: "/imagens/vestido-floral.jpg",
      descricao: "Vestido leve com estampa floral. Perfeito para dias quentes."
    },
    {
      id: 5,
      nome: "Jaqueta Jeans Unissex",
      preco: 179.90,
      estoque: 3,
      imagem: "/imagens/jaqueta-jeans.jpg",
      descricao: "Jaqueta jeans moderna e estilosa, ideal para meia estação."
    },
    {
      id: 6,
      nome: "Blusa de Moletom",
      preco: 99.90,
      estoque: 7,
      imagem: "/imagens/moletom.jpg",
      descricao: "Moletom com capuz, confortável e quente para o inverno."
    },
    {
      id: 7,
      nome: "Saia Midi",
      preco: 89.90,
      estoque: 5,
      imagem: "/imagens/saia-midi.jpg",
      descricao: "Saia midi elegante para looks mais formais ou casuais."
    },
    {
      id: 8,
      nome: "Camisa Social Branca",
      preco: 109.90,
      estoque: 4,
      imagem: "/imagens/camisa-social.jpg",
      descricao: "Camisa branca clássica para trabalho ou eventos."
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
        <div className="produto-card" key={p.id}>
          <img src={p.imagem} alt={p.nome} />
          <h3>{p.nome}</h3>
          <p>R$ {p.preco.toFixed(2)}</p>
          <p>Estoque: {p.estoque}</p>
          <button onClick={() => verDetalhes(p.id)}>Ver Detalhes</button>
        </div>
      ))}
    </div>
  );
}
