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
          <h1 className="ia-title">
            IA <span>AGENTIQUE</span>
          </h1>
          <h2 className="ia-subtitle">
            <span className="ia-strong">L'IA agentique</span> :{" "}
            <span className="ia-strong">l'automatisation</span> au cœur de
            votre entreprise
          </h2>

          <p className="ia-text">
            L'IA agentique révolutionne la manière dont les entreprises automatisent 
            leurs processus. Capable de créer des agents intelligents qui travaillent 
            de manière autonome, elle offre une automatisation poussée et une optimisation 
            continue des opérations. Nos agents IA s'intègrent parfaitement à vos systèmes 
            existants pour transformer votre efficacité opérationnelle.
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
