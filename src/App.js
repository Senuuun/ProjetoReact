import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
import PaymentLogin from "./components/PaymentLogin/PaymentLogin";

import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Produtos from "./pages/Produtos/Produtos";
import ProdutoDetalhe from "./pages/Produtos/ProdutoDetalhe";
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/:id" element={<ProdutoDetalhe />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pagamento" element={<PaymentLogin />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;

