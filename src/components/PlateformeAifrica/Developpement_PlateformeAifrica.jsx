import React from "react";

const Developpement_PlateformeAifrica = () => {
  const timeline = [
    {
      number: "1",
      title: "Analyse & Conseil",
      description: "Nous étudions vos besoins spécifiques et élaborons une stratégie IA sur mesure pour votre entreprise. Notre équipe d'experts analyse vos processus actuels et identifie les opportunités d'optimisation."
    },
    {
      number: "2",
      title: "Développement",
      description: "Nos ingénieurs développent des solutions IA personnalisées en utilisant les dernières technologies. Nous suivons une méthodologie agile pour garantir une livraison rapide et itérative."
    },
    {
      number: "3",
      title: "Intégration",
      description: "Nous intégrons harmonieusement nos solutions IA dans votre écosystème technologique existant. Nos équipes assurent une transition en douceur sans perturber vos opérations."
    },
    {
      number: "4",
      title: "Formation",
      description: "Nous formons vos équipes à l'utilisation des nouvelles solutions IA pour maximiser leur adoption et leur efficacité. Des sessions personnalisées sont organisées selon vos besoins."
    },
    {
      number: "5",
      title: "Support Continu",
      description: "Notre équipe reste à votre disposition pour assurer la maintenance, les mises à jour et l'amélioration continue de vos solutions IA. Un support 24/7 est disponible pour nos clients premium."
    }
  ];

  return (
    <section className="development-section">
      <div className="container">
        <h2 className="section-title">Comment Ça Marche</h2>
        <p className="section-subtitle">
          Notre approche méthodologique garantit le succès de votre transformation IA. 
          Chaque étape est conçue pour maximiser la valeur et minimiser les risques.
        </p>
        <div className="development-timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-number">{item.number}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developpement_PlateformeAifrica;
