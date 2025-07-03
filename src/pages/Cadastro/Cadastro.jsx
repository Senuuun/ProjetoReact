import { useState } from "react";
import "./Cadastro.css";

export default function Cadastro() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Verifica se já existe uma lista de usuários
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica se o email já está cadastrado
    const jaExiste = usuarios.find((u) => u.email === form.email);
    if (jaExiste) {
      alert("E-mail já cadastrado.");
      return;
    }

    // Adiciona novo usuário e salva
    usuarios.push(form);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");
    setForm({ nome: "", email: "", senha: "" });
  }

  return (
    <form className="cadastro-form" onSubmit={handleSubmit}>
      <h2>Cadastro de Usuário</h2>
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={form.nome}
        onChange={handleChange}
        required
      />
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
      <button type="submit">Cadastrar</button>
    </form>
  );
}
