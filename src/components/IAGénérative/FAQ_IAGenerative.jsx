import React, { useState } from "react";
import "../../css/FAQ.css";
import { FaChevronDown } from "react-icons/fa";

const FAQ_IAGenerative = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Qu'est-ce que l'IA générative ?",
      answer:
        "C'est une technologie capable de créer du contenu inédit : texte, image, audio, vidéo, code, et bien plus encore.",
    },
    {
      question:
        "Quelle est la différence entre IA analytique et IA générative ?",
      answer:
        "L'IA analytique analyse et prédit. L'IA générative crée du contenu original à partir d'un apprentissage massif.",
    },
    {
      question: "Quels modèles utilise Aifrica ?",
      answer:
        "Nous utilisons GAN, Transformers, modèles de diffusion et autres architectures avancées selon vos besoins.",
    },
    {
      question: "Quels métiers peuvent bénéficier de l'IA générative ?",
      answer:
        "Marketing, IT, RH, Finance, Service Client, Communication et Direction générale.",
    },
    {
      question: "Aifrica propose-t-elle du prompt engineering ?",
      answer:
        "Oui. Nous formons vos équipes à créer des instructions précises pour maximiser la qualité des résultats.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>
        Questions <span>fréquentes</span>
      </h2>
      <p className="faq-subtitle">
        Tout ce que vous devez savoir sur l'IA générative
      </p>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <FaChevronDown
                className={`faq-icon ${activeIndex === index ? "rotate" : ""}`}
              />
            </div>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ_IAGenerative;
