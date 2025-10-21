import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/hero.css";

const frases = [
  "A PRIMEIRA ESCOLHA",
  "Mais força, menos desculpas",
  "Transforme seu corpo e sua mente",
  "Treine hoje, colha resultados amanhã",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % frases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Função para separar a frase e colocar a segunda palavra em vermelho
  const formatFrase = (frase) => {
    const words = frase.split(" ");
    return (
      <>
        {words.map((word, i) =>
          i === 1 ? (
            <span key={i} className="highlight">{word} </span>
          ) : (
            <span key={i}>{word} </span>
          )
        )}
      </>
    );
  };

  return (
    <div className="hero">
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {formatFrase(frases[index])}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default Hero;
