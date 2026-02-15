import React from "react";
import "../css/MaturiteIa.css";
import maturiteImg from "../assets/images/diagnostic-preview.png";

export default function MaturiteIa() {
  return (
    <section className="maturite-wrapper">
      <div className="maturite-left">
        <h1 className="maturite-title">
          Il faut toujours un point de <span className="highlight">départ</span>{" "}
          dans une <span className="highlight">aventure</span> !
        </h1>

        <p className="maturite-subtitle">
          Vous souhaitez évaluer votre{" "}
          <span className="highlight">maturité IA</span> ?
        </p>

        <p className="maturite-desc">
          Nous vous proposons un diagnostic en 10 minutes et recevez une analyse
          personnalisée de vos résultats avec un expert.
        </p>

        <a href="#" className="maturite-btn">
          Commencer le diagnostic
        </a>
      </div>

      <div className="maturite-right">
        <img src={maturiteImg} alt="diagnostic IA" className="maturite-image" />
      </div>
    </section>
  );
}
