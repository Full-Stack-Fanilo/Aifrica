import React from "react";
import "../css/IAAgentique.css";
import iaImage from "../assets/images/ia agentique.png";
import { useNavigate } from "react-router-dom";

const IAAgentique = () => {
  const navigate = useNavigate();
  return (
    <section className="ia-gen-section">
      <div className="ia-content">
        {/* TEXTE DROITE */}
        <div className="ia-right">
          <h1 className="ia-title1">
            IA <span>Agentique</span>
          </h1>
          <p className="ia-text">
            Nous vous aidons à concevoir votre agent IA sur mesure. Aifrica
            transforme vos processus métiers grâce à la puissance de l’IA
            agentique.
          </p>

          <p className="ia-text">
            Notre solution permet de concevoir des agents IA personnalisés,
            capables d’automatiser efficacement toutes vos activités ou
            processus, quels que soient vos besoins spécifiques.
          </p>

          <p className="ia-text mt-3">
            Profitez d’une automatisation rapide et personnalisée, évolutive et
            adaptée à votre entreprise : nos agents IA s’intègrent facilement à
            vos applications existantes et optimisent en continu vos
            performances
          </p>

          <button className="ia-link" onClick={() => navigate("/IA-Agentique")}>
            En savoir plus sur l'IA Agentique
          </button>
        </div>

        {/* IMAGE GAUCHE */}
        <div className="ia-left">
          <img src={iaImage} alt="IA Générative" className="ia-img" />
        </div>
      </div>
    </section>
  );
};

export default IAAgentique;
