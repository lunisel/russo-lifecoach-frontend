import React from "react";
import "./styles.css";

const ChiSono = ({ vw }) => {
  return (
    <div className="big-container chi-sono" id="chi-sono">
      <div className="image-container">
        <img
          src="https://coachingonlifecom.files.wordpress.com/2022/05/whatsapp-image-2022-04-04-at-15.50.29-edited.jpeg"
          alt="myself"
        />
      </div>
      <div className="text-container">
        <h2 className="title">Chi sono?</h2>
        <p className="description">
          Luca Russo, Dottore in Scienze del Comportamento e delle Relazioni
          Sociali, specializzato in Life Design e Motivazione al Cambiamento.
          Anni fa, dopo la laurea, ho deciso di ripartire da un foglio bianco e
          disegnare la vita che avrei sempre voluto: dedico la mia quotidianità
          alla realizzazione dei miei sogni e dedico la mia carriera ad aiutare
          gli altri a fare lo stesso. Il mio approccio al Life Coaching vuole
          coniugare i capisaldi della Psicologia Positiva e della Psicologia
          della Motivazione agli strumenti del coaching, in un’ottica
          costruttivista centrata interamente sul cliente. “Drive your Life” è
          il mio mantra, prendi consapevolezza dei tuoi bisogni e delle tue
          credenze più profonde per tracciare ed autodeterminare la direzione
          della tua vita!
        </p>
      </div>
    </div>
  );
};

export default ChiSono;
