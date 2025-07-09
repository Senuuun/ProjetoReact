import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Topbar.css";

export default function Topbar() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [menuAberto, setMenuAberto] = useState(false);
  const [imagemErro, setImagemErro] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (usuario) {
      setUsuarioLogado(usuario);
    }
  }, []);

  useEffect(() => {
    function handleClickFora(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuAberto(false);
      }
    }
    document.addEventListener("mousedown", handleClickFora);
    return () => document.removeEventListener("mousedown", handleClickFora);
  }, []);

  function handleLogout() {
    localStorage.removeItem("usuarioLogado");
    setUsuarioLogado(null);
    setMenuAberto(false);
    navigate("/");
  }

  return (
    <header className="topbar">
      <Link to="/" className="logo">Supermercado Online</Link>

      <div className="topbar-right">
        <nav className="menu">
          {!usuarioLogado && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/cadastro">Cadastro</Link>
            </>
          )}
          <Link to="/produtos">Produtos</Link>
          <Link to="/sobre">Sobre</Link>
        </nav>

        {usuarioLogado && (
          <div className="usuario-container" ref={menuRef}>
            <img
              src={imagemErro ? "/imagem-padrao.png" : "/imagens/topbar/usuario.png"}
              alt="Usuário"
              className="usuario-imagem"
              onClick={() => setMenuAberto(!menuAberto)}
              onError={() => setImagemErro(true)}
            />
            {menuAberto && (
              <div className="menu-popup">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
