import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ProdutoDetalhe.css";

export default function ProdutoDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produto, setProduto] = useState(null);
  const [pagamento, setPagamento] = useState(() => {
    return JSON.parse(localStorage.getItem("pagamento"));
  });

  useEffect(() => {
    const estoque = JSON.parse(localStorage.getItem("estoque")) || [];
    const encontrado = estoque.find((p) => p.id === parseInt(id));
    setProduto(encontrado);
  }, [id]);

  function comprarProduto() {
    if (!pagamento) {
      // salva o destino para retornar depois
      localStorage.setItem("destinoCompra", window.location.pathname);
      navigate("/pagamento");
      return;
    }

    const estoque = JSON.parse(localStorage.getItem("estoque"));
    const atualizado = estoque.map((p) =>
      p.id === produto.id && p.estoque > 0
        ? { ...p, estoque: p.estoque - 1 }
        : p
    );
    localStorage.setItem("estoque", JSON.stringify(atualizado));
    setProduto((prev) => ({ ...prev, estoque: prev.estoque - 1 }));
    alert("Compra realizada com sucesso!");
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
