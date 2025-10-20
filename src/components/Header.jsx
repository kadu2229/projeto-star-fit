import logo from '../images/starFit.png'
import '../styles/header.css'
import { FaInstagram } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Header = () => {
  return(
    <div>
      <header id='header'>
        <nav className='navBar'>
          <a href="/"><img id='logo' src={logo} alt="LOGO"/></a>
          <div className='links'>
            <a href="/planos">Planos</a>
            <a href='/contato'>Contato</a>
            <a href="/aulas">Aulas</a>
          </div>
          <div className='social'>
            <a href="starfitsantacruz@gmail.com"><HiOutlineMail /></a>
            <a href="https://www.instagram.com/academiastar_fit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram /></a>
            <a href="https://wa.me/5521960161919?text=Gostaria%20informa%C3%A7%C3%B5es%20sobre%20o%20financeiro."><FaWhatsapp /></a>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header;