import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "../../css/FAQ.css";

const FAQ_IAAgentique = () => {
  const [active, setActive] = useState(null);

  const toggle = (i) => setActive(active === i ? null : i);

  const faqs = [
    {
      question: "Qu'est-ce qu'un agent IA ?",
      answer:
        "Un agent IA est un système autonome capable d'observer, analyser, décider et exécuter des tâches complexes sans supervision constante.",
    },
    {
      question: "En quoi l'IA agentique diffère-t-elle de l'automatisation ?",
      answer:
        "L'automatisation suit des règles prédéfinies. L'IA agentique, elle, s'adapte aux imprévus, apprend et prend des décisions autonomes.",
    },
    {
      question: "Quels processus peuvent être automatisés ?",
      answer:
        "Service client, finance, logistique, RH, traitement de documents, pilotage d'outils métiers, vérification de données…",
    },
    {
      question: "Quelle technologie utilise Aifrica ?",
      answer:
        "Nous nous appuyons sur le protocole MCP pour garantir une intégration sécurisée, traçable et parfaitement adaptée à votre organisation.",
    },
    {
      question: "Quels bénéfices concrets pour mon entreprise ?",
      answer:
        "Moins de coûts, moins d'erreurs, gains de productivité et décisions plus rapides grâce à des agents IA qui travaillent 24/7.",
    },
  ];

  return (
    <section className="faq-section">
      <h2>
        Questions <span>fréquentes</span>
      </h2>
      <p className="faq-subtitle">
        Tout ce que vous devez savoir sur l'IA agentique avec Aifrica
      </p>

      <div className="faq-container">
        {faqs.map((f, i) => (
          <div
            key={i}
            className={`faq-item ${active === i ? "active" : ""}`}
            onClick={() => toggle(i)}
          >
            <div className="faq-question">
              <h3>{f.question}</h3>
              <FaChevronDown
                className={`faq-icon ${active === i ? "rotate" : ""}`}
              />
            </div>
            {active === i && (
              <div className="faq-answer">
                <p>{f.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ_IAAgentique;
