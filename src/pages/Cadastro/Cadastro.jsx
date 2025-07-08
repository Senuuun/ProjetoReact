import { useState } from "react";
import "./Cadastro.css";

export default function Cadastro() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    endereco: "",
    numeroDaCasa: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function buscarEndereco(cep) {
    if (cep.length === 8) {
      try {
        const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await res.json();
        if (!data.erro) {
          setForm((prev) => ({
            ...prev,
            endereco: data.logradouro || "",
            bairro: data.bairro || "",
            cidade: data.localidade || "",
            estado: data.uf || "",
          }));
        }
      } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (usuarios.some((u) => u.email === form.email)) {
      return alert("E-mail já cadastrado.");
    }

    usuarios.push(form);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Cadastro realizado com sucesso!");

    setForm({
      nome: "",
      email: "",
      senha: "",
      cep: "",
      endereco: "",
      numeroDaCasa: "",
      bairro: "",
      cidade: "",
      estado: "",
    });
  }

  return (
    <form className="cadastro-form" onSubmit={handleSubmit}>
      <h2>Cadastro de Usuário</h2>

      <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="senha" type="password" placeholder="Senha" value={form.senha} onChange={handleChange} required />

      <input
        name="cep"
        placeholder="CEP"
        value={form.cep}
        onChange={handleChange}
        onBlur={(e) => buscarEndereco(e.target.value)}
        required
      />
      <input name="endereco" placeholder="Endereço" value={form.endereco} onChange={handleChange} required />
      <input name="numeroDaCasa" placeholder="Número da casa" value={form.numeroDaCasa} onChange={handleChange} required />
      <input name="bairro" placeholder="Bairro" value={form.bairro} onChange={handleChange} required />
      <input name="cidade" placeholder="Cidade" value={form.cidade} onChange={handleChange} required />
      <input name="estado" placeholder="Estado" value={form.estado} onChange={handleChange} required />

      <button type="submit">Cadastrar</button>
    </form>
  );
}
