import { Link } from "react-router-dom";
import "./Topbar.css";

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="logo">Loja de Roupas</div>
      <nav className="menu">
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}
