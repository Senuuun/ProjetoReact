import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    senha: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuarios.find(
      (u) => u.email === form.email && u.senha === form.senha
    );

    if (usuarioEncontrado) {
      localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
      alert("Login realizado com sucesso!");
      // redirecionamento opcional
      // window.location.href = "/";
    } else {
      alert("Email ou senha incorretos.");
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="senha"
        placeholder="Senha"
        value={form.senha}
        onChange={handleChange}
        required
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
