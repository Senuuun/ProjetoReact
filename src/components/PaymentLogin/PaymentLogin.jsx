import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentLogin.css";

export default function PaymentLogin() {
  const [form, setForm] = useState({
    nome: "",
    numero: "",
    validade: "",
    cvv: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("dadosPagamento", JSON.stringify(form));

    // Atualizar estoque
    const produto = JSON.parse(localStorage.getItem("produtoParaCompra"));
    const estoque = JSON.parse(localStorage.getItem("estoque")) || [];

    const atualizado = estoque.map((p) =>
      p.id === produto.id && p.estoque > 0
        ? { ...p, estoque: p.estoque - 1 }
        : p
    );

    localStorage.setItem("estoque", JSON.stringify(atualizado));
    localStorage.removeItem("produtoParaCompra");

    alert("Pagamento realizado com sucesso!");

    const destino = localStorage.getItem("destinoCompra") || "/produtos";
    localStorage.removeItem("destinoCompra");
    navigate(destino);
  }

  return (
    <div className="pagamento-form-wrapper">
      <form onSubmit={handleSubmit} className="pagamento-form">
        <h2>Pagamento com Cartão</h2>

        <input
          type="text"
          name="nome"
          placeholder="Nome no cartão"
          value={form.nome}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="numero"
          placeholder="Número do cartão"
          value={form.numero}
          onChange={handleChange}
          maxLength="19"
          required
        />

        <div className="linha-cartao">
          <input
            type="text"
            name="validade"
            placeholder="MM/AA"
            value={form.validade}
            onChange={handleChange}
            maxLength="5"
            required
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={form.cvv}
            onChange={handleChange}
            maxLength="4"
            required
          />
        </div>

        <button type="submit">Pagar</button>
      </form>
    </div>
  );
}
