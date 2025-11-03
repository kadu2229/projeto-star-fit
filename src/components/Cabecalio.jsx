import logo from "../images/starFit.png";
import "../styles/header.css";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Cabecalio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <header id="header">
        <div className="headerContent">
          <a href="/">
            <img id="logo" src={logo}  alt="LOGO"/>
          </a>
          <nav className="navBar">
            <div className="links">
              <a href="/planos">Planos</a>
              <a href="/contato">Contato</a>
              <a href="/aulas">Aulas</a>
            </div>
          </nav>
            <div className="social">
              <a target="blank_" href="starfitsantacruz@gmail.com">
                <HiOutlineMail />
              </a>
              <a
                target="blank_"
                href="https://www.instagram.com/academiastar_fit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              >
                <FaInstagram />
              </a>
              <a
                target="blank_"
                href="https://wa.me/5521960161919?text=Gostaria%20informa%C3%A7%C3%B5es%20sobre%20o%20financeiro."
              >
                <FaWhatsapp />
              </a>
            </div>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen === false ? <GiHamburgerMenu /> : <AiOutlineClose />}
          </button>
          {menuOpen && (
            <div className="mobile-menu">
              <div className="links">
                <a href="/planos" onClick={() => setMenuOpen(false)}>
                  Planos
                </a>
                <a href="/contato" onClick={() => setMenuOpen(false)}>
                  Contato
                </a>
                <a href="/aulas" onClick={() => setMenuOpen(false)}>
                  Aulas
                </a>
              </div>
              <div className="social">
                <a target="_blank" href="mailto:starfitsantacruz@gmail.com">
                  <HiOutlineMail />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/academiastar_fit/"
                >
                  <FaInstagram />
                </a>
                <a
                  target="_blank"
                  href="https://wa.me/5521960161919?text=Gostaria%20informa%C3%A7%C3%B5es%20sobre%20o%20financeiro."
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Cabecalio;
