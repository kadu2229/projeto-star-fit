import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="mais">
      <h2 className="title">ENTRE EM CONTATO</h2>

      <div className="container">
        {/* QUEM SOMOS */}
        <div className="about">
          <h1>Quem somos nós</h1>
          <p>
            A STAR FIT é uma academia comprometida com a saúde e bem-estar, oferecendo
            infraestrutura de ponta, aulas coletivas, musculação e suporte integral
            para todos os níveis. Nosso objetivo é transformar seu treino em uma
            experiência completa, motivadora e eficiente. Venha fazer parte da nossa
            comunidade!
          </p>
        </div>

        {/* FORMULÁRIO */}
        <div className="footer-form">
          <h3 className="subTitle">Saiba Mais</h3>
          <form
            action="https://formsubmit.co/starfitsantacruz@gmail.com"
            method="POST"
          >
            <div className="inputGroup">
              <input type="text" name="nome" placeholder="Nome" required />
              <input type="email" name="email" placeholder="seuemail@gmail.com" required />
            </div>

            <textarea
              name="mensagem"
              placeholder="Mensagem, sugestão ou dúvida"
              required
            ></textarea>

            <button type="submit" className="submitButton">
              Enviar
            </button>
          </form>
        </div>

        {/* CONTATO */}
        <div className="footer-contact">
          <p>Celular: (21) 99999-9999</p>

          <h4>Redes Sociais</h4>
          <div className="social">
            <a
              href="https://www.instagram.com/academiastar_fit/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/5521960161919"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:starfitsantacruz@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
