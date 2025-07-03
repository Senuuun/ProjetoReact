import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ProdutoDetalhe.css";

export default function ProdutoDetalhe() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const estoque = JSON.parse(localStorage.getItem("estoque")) || [];
    const encontrado = estoque.find((p) => p.id === parseInt(id));
    setProduto(encontrado);
  }, [id]);

  function comprarProduto() {
    const estoque = JSON.parse(localStorage.getItem("estoque"));
    const atualizado = estoque.map((p) =>
      p.id === produto.id && p.estoque > 0
        ? { ...p, estoque: p.estoque - 1 }
        : p
    );
    localStorage.setItem("estoque", JSON.stringify(atualizado));
    setProduto((prev) => ({ ...prev, estoque: prev.estoque - 1 }));
    alert("Produto comprado!");
  }

  if (!produto) return <p>Produto não encontrado.</p>;

  return (
    <div className="produto-detalhe">
      <img src={produto.imagem} alt={produto.nome} />
      <h2>{produto.nome}</h2>
      <p>{produto.descricao}</p>
      <p><strong>R$ {produto.preco.toFixed(2)}</strong></p>
      <p>Estoque: {produto.estoque}</p>
      <button onClick={comprarProduto} disabled={produto.estoque === 0}>
        {produto.estoque === 0 ? "Indisponível" : "Comprar"}
      </button>
    </div>
  );
}
