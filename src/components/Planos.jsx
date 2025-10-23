import "../styles/planos.css";
import { TiInputChecked } from "react-icons/ti";
import CarouselGym from './Carousel'; // Carousel próprio, sem Bootstrap

const Planos = () => {
  return (
    <div className="planos">
      <h2>
        VENHA SER <span>STAR FIT</span>
      </h2>
      <p>A MELHOR INFRAESTRUTURA PELO MELHOR PREÇO DA REGIÃO</p>

      {/* Carousel customizado */}
      <div className="PlanosLabel">
        <div className="carousel-wrapper">
          <CarouselGym />
        </div>
      </div>

      <section className="content">
        {/* Card 1 */}
        <div className="card">
          <h3>PLANO MENSAL</h3>
          <h1>R$99,99</h1>
          <p>AULAS COLETIVAS <span><TiInputChecked /></span></p>
          <p>MUSCULAÇÃO <span><TiInputChecked /></span></p>
          <p>SUPORTE INTEGRAL <span><TiInputChecked /></span></p>
          <div className="hire">
            <a href="">CONTRATAR AGORA</a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <h3>PLANO TRIMESTRAL</h3>
          <h1>R$99,99</h1>
          <p>AULAS COLETIVAS <span><TiInputChecked /></span></p>
          <p>MUSCULAÇÃO <span><TiInputChecked /></span></p>
          <p>SUPORTE INTEGRAL <span><TiInputChecked /></span></p>
          <div className="hire">
            <a href="">CONTRATAR AGORA</a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <h3>PLANO ANUAL</h3>
          <h1>R$99,99</h1>
          <p>AULAS COLETIVAS <span><TiInputChecked /></span></p>
          <p>MUSCULAÇÃO <span><TiInputChecked /></span></p>
          <p>SUPORTE INTEGRAL <span><TiInputChecked /></span></p>
          <div className="hire">
            <a href="">CONTRATAR AGORA</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Planos;
