import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentLogin.css";

export default function PaymentLogin() {
  const [form, setForm] = useState({ email: "", senha: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("pagamento", JSON.stringify(form));

    const destino = localStorage.getItem("destinoCompra") || "/produtos";
    localStorage.removeItem("destinoCompra");
    navigate(destino);
  }

  return (
    <div className="pagamento-form-wrapper">
      <form onSubmit={handleSubmit} className="pagamento-form">
        <h2>Login do Pagamento</h2>
        <input
          name="email"
          type="email"
          placeholder="Email do pagamento"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="senha"
          type="password"
          placeholder="Senha"
          value={form.senha}
          onChange={handleChange}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
