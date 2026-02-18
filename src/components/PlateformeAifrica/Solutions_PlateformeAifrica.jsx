import React from "react";

const Solutions_PlateformeAifrica = () => {
  const solutions = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),
      title: "IA Générative",
      description: "Créez du contenu unique et personnalisé avec nos modèles d'IA générative de pointe.",
      features: [
        "Génération de texte multilingue",
        "Création d'images et designs",
        "Traduction automatique avancée",
        "Synthèse vocale naturelle"
      ]
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18"/>
          <path d="M18 17V9"/>
          <path d="M13 17V5"/>
          <path d="M8 17v-3"/>
        </svg>
      ),
      title: "Analyse de Données",
      description: "Transformez vos données brutes en insights pertinents pour prendre des décisions éclairées.",
      features: [
        "Analyse prédictive",
        "Visualisation interactive",
        "Reporting automatisé",
        "Détection d'anomalies"
      ]
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6m4.22-13.22l4.24 4.24M1.54 1.54l4.24 4.24M20.46 20.46l-4.24-4.24M1.54 20.46l4.24-4.24"/>
        </svg>
      ),
      title: "IA Agentique",
      description: "Déployez des agents intelligents autonomes pour automatiser vos processus métier.",
      features: [
        "Agents conversationnels",
        "Automatisation intelligente",
        "Apprentissage continu",
        "Intégration multi-plateforme"
      ]
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "Personnalisation",
      description: "Offrez des expériences uniques à chaque utilisateur avec l'IA adaptative.",
      features: [
        "Recommandations personnalisées",
        "Segmentation dynamique",
        "Optimisation en temps réel",
        "Profils utilisateurs intelligents"
      ]
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: "Sécurité IA",
      description: "Protégez vos systèmes avec nos solutions de sécurité basées sur l'intelligence artificielle.",
      features: [
        "Détection de menaces",
        "Analyse comportementale",
        "Sécurité prédictive",
        "Réponse automatique"
      ]
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      title: "Optimisation",
      description: "Maximisez l'efficacité de vos opérations avec l'IA d'optimisation.",
      features: [
        "Optimisation des ressources",
        "Planification intelligente",
        "Réduction des coûts",
        "Amélioration continue"
      ]
    }
  ];

  return (
    <section className="solutions-section">
      <div className="container">
        <h2 className="section-title">Nos Solutions IA</h2>
        <p className="section-subtitle">
          Découvrez notre gamme complète de solutions d'intelligence artificielle 
          conçues pour répondre aux défis spécifiques du marché africain.
        </p>
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <div className="solution-icon">
                {solution.icon}
              </div>
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
              <ul className="solution-features">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions_PlateformeAifrica;
