import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Bem-vindo à Loja de Roupas!</h1>
        <p>Moda acessível, sustentável e com estilo para todas as ocasiões.</p>
        <a href="/produtos" className="btn">Ver produtos</a>
      </div>
    </section>
  );
}
