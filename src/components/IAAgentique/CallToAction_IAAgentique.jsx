import React from "react";
import "../../css/CallToAction.css";
import { useNavigate } from "react-router-dom";

const CallToAction_IAAgentique = () => {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>
          Prêt à déployer vos <span>agents IA autonomes</span> ?
        </h2>
        <p>
          Contactez-nous pour découvrir comment nos agents IA peuvent
          automatiser vos processus, améliorer vos performances et libérer vos
          équipes des tâches répétitives.
        </p>
        <button onClick={() => navigate("/contact")}>
          Discuter avec un expert
        </button>
      </div>
    </section>
  );
};

export default CallToAction_IAAgentique;
