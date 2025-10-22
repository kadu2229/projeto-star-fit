import "../styles/planos.css";
import { TiInputChecked } from "react-icons/ti";

const Planos = () => {
  return (
    <div className="planos">
      <h2>VENHA SER <span>STAR FIT</span></h2>
      <p>A MELHOR INFROESTRUTURA PELO MELHOR PREÇO DA REGIÃO</p>
      <section className="content">
        <div className="card">
          <h3>PLANO MENSAL</h3>
          <h1>R$99,99</h1>
          <p>
            AULAS COLETIVAS <span><TiInputChecked /></span>
          </p>
          <p>
            MUSCULAÇÃO <span><TiInputChecked /></span>
          </p>
          <p>
            SUPORTE INTEGRAL <span><TiInputChecked /></span>
          </p>
          <div className="hire">
            <a href="">CONTRATAR AGORA</a>
          </div>
        </div>
        <div className="card">
          <h3>PLANO TRIMESTRAL</h3>
          <h1>R$99,99</h1>
          <p>
            AULAS COLETIVAS <span><TiInputChecked /></span>
          </p>
          <p>
            MUSCULAÇÃO <span><TiInputChecked /></span>
          </p>
          <p>
            SUPORTE INTEGRAL <span><TiInputChecked /></span>
          </p>
          <div className="hire">
            <a href="">CONTRATAR AGORA</a>
          </div>
        </div>
        <div className="card">
          <h3>PLANO ANUAL</h3>
          <h1>R$99,99</h1>
          <p>
            AULAS COLETIVAS <span><TiInputChecked /></span>
          </p>
          <p>
            MUSCULAÇÃO <span><TiInputChecked /></span>
          </p>
          <p>
            SUPORTE INTEGRAL <span><TiInputChecked /></span>
          </p>
          <div className="hire">
            <a href="">CONTRATAR AGORA</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Planos;
