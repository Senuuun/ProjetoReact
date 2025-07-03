import { Link } from "react-router-dom";
import "./Topbar.css";

export default function Topbar() {
  return (
    <header className="topbar">
      <Link to="/" className="logo">Loja de Roupas</Link>
      <nav className="menu">
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
    </header>
  );
}
