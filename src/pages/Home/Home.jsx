import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Bem-vindo ao Supermercado Online!</h1>
        <p>Faça suas compras sem sair de casa. Produtos frescos e com entrega rápida para sua comodidade.</p>
        <a href="/produtos" className="btn">Ver produtos</a>
      </div>
    </section>
  );
}
