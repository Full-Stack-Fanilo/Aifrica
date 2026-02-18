import React, { useState } from "react";

const FAQ_PlateformeAifrica = () => {
  const [activeItem, setActiveItem] = useState(null);

  const faqs = [
    {
      question: "Qu'est-ce que la plateforme AIFRICA ?",
      answer: "AIFRICA est une plateforme d'intelligence artificielle complète conçue spécifiquement pour le marché africain. Elle offre des solutions IA personnalisées pour aider les entreprises à automatiser leurs processus, analyser leurs données et prendre des décisions plus intelligentes."
    },
    {
      question: "Quels types d'entreprises peuvent utiliser AIFRICA ?",
      answer: "Notre plateforme s'adapte à tous les secteurs d'activité : finance, santé, éducation, agriculture, commerce, logistique et bien d'autres. Que vous soyez une startup, une PME ou une grande entreprise, nous avons des solutions adaptées à vos besoins."
    },
    {
      question: "Comment commencer avec AIFRICA ?",
      answer: "Le processus est simple : contactez-nous pour une consultation gratuite, notre équipe analyse vos besoins, nous vous proposons une solution personnalisée, et après validation, nous procédons à l'implémentation. Vous pouvez commencer par un projet pilote pour tester nos solutions."
    },
    {
      question: "Quelles sont les technologies utilisées ?",
      answer: "Nous utilisons les technologies IA les plus avancées : machine learning, deep learning, NLP, computer vision, et IA générative. Notre plateforme est basée sur des architectures cloud modernes et sécurisées, garantissant performance et scalabilité."
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "Absolument. La sécurité est notre priorité absolue. Vos données sont chiffrées de bout en bout, stockées dans des centres de données sécurisés, et nous respectons toutes les réglementations de protection des données, y compris le RGPD."
    },
    {
      question: "Quel est le coût des solutions AIFRICA ?",
      answer: "Nos tarifs sont flexibles et adaptés à votre budget. Nous proposons différents modèles : abonnement mensuel, paiement à l'utilisation, ou projets sur mesure. Contactez-nous pour obtenir un devis personnalisé selon vos besoins spécifiques."
    },
    {
      question: "Offrez-vous une formation aux équipes ?",
      answer: "Oui, nous proposons des programmes de formation complets pour vos équipes. De la sensibilisation à l'IA jusqu'à l'expertise technique, nos formateurs certifiés assurent que votre personnel maîtrise parfaitement nos solutions."
    },
    {
      question: "Quel est le délai de mise en place ?",
      answer: "Le délai varie selon la complexité de votre projet. Pour nos solutions standards, la mise en place peut prendre de 2 à 4 semaines. Pour les projets personnalisés, le délai moyen est de 2 à 3 mois. Nous vous fournissons un planning détaillé lors de la phase de conception."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">Questions Fréquentes</h2>
        <p className="section-subtitle">
          Vous avez des questions sur notre plateforme ? Trouvez les réponses ci-dessous 
          ou contactez notre équipe pour plus d'informations.
        </p>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeItem === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ_PlateformeAifrica;
