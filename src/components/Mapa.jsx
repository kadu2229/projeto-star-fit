import '../styles/mapa.css'
import { LuMapPin } from 'react-icons/lu';

const Mapa = () => {
  return (
    <div className="mapa-container">
      <div className='content'>
        <h3><span><LuMapPin /></span>ESTAMOS LOCALIZADOS AQUI </h3>
      </div>
      <iframe
        title="Localização - Star Fit Academia"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.3321578692694!2d-43.274146525826865!3d-22.64140112843825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9973486cc02257%3A0xd5370c3db202977!2sStar%20Fit%20Academia!5e0!3m2!1spt-BR!2sbr!4v1761086521095!5m2!1spt-BR!2sbr"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Mapa;
