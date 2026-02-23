import React from "react";
import "../../css/CallToAction.css";
import { useNavigate } from "react-router-dom";

const CallToAction_IAGenerative = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/contact");

  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>
          Prêt à <span>déployer l'IA générative</span> dans votre entreprise ?
        </h2>
        <p>
          Discutez avec nos experts Aifrica pour construire votre feuille de
          route, paramétrer vos cas d'usage et transformer l'IA générative en un
          vrai avantage concurrentiel.
        </p>
        <button onClick={handleClick}>Commencer votre transformation</button>
      </div>
    </section>
  );
};

export default CallToAction_IAGenerative;
