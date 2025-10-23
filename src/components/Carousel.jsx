import { useState, useEffect, useRef } from "react";
import background from "../images/background.jpg";
import background2 from "../images/background2.jpg";
import background3 from "../images/background3.jpg";
import "../styles/carousel.css"; // importa os estilos

const slides = [
  { id: 1, image: background, title: "Primeiro slide", text: "Bem-vindo à STAR FIT!" },
  { id: 2, image: background2, title: "Segundo slide", text: "A melhor infraestrutura da região." },
  { id: 3, image: background3, title: "Terceiro slide", text: "Venha fazer parte da nossa equipe!" },
];

function CarouselGym() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const startX = useRef(null);

  // Troca automática
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  // Swipe mobile
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX.current - endX > 50) nextSlide();
    if (endX - startX.current > 50) prevSlide();
  };

  return (
    <div
      className="carousel-hero-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === current ? "active" : ""}`}
        >
          <img src={slide.image} alt={slide.title} />
          <div className="caption">
            <h2>{slide.title}</h2>
            <p>{slide.text}</p>
          </div>
        </div>
      ))}

      {/* Navegação */}
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>

      {/* Bullets */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default CarouselGym;
