import React from "react";

const Intro_PlateformeAifrica = () => {
  return (
    <section className="intro-section">
      <div className="container">
        <div className="intro-wrapper">
          {/* Badge */}
          <div className="intro-badge">
            <span className="intro-badge-dot"></span>À propos d'AIFRICA
          </div>

          {/* Titre principal */}
          <h2 className="intro-title">
            La Data et l'IA au service de la{" "}
            <span className="intro-title-highlight">transformation</span> des
            entreprises africaines
          </h2>

          {/* Contenu texte */}
          <div className="intro-content">
            <p className="intro-paragraph intro-paragraph--lead">
              L'Afrique entre dans une nouvelle ère économique. Portées par une
              jeunesse dynamique, une urbanisation accélérée et une connectivité
              en pleine expansion, les entreprises du continent font face à des
              opportunités immenses — mais aussi à des défis de taille :
              compétitivité, efficacité opérationnelle, prise de décision dans
              un environnement en constante évolution.
            </p>

            <div className="intro-divider">
              <span>C'est dans ce contexte que AIFRICA voit le jour.</span>
            </div>

            <p className="intro-paragraph">
              AIFRICA est une entreprise spécialisée dans l'accompagnement des
              organisations africaines vers la transformation numérique par la
              Data et l'Intelligence Artificielle. Notre mission est simple :
              mettre ces technologies au service de la réalité des entreprises
              africaines, pour des résultats{" "}
              <strong>concrets, mesurables et durables</strong>.
            </p>

            <p className="intro-paragraph">
              Qu'il s'agisse d'optimiser des processus métiers, d'exploiter des
              données encore inexploitées, d'automatiser des tâches à faible
              valeur ajoutée ou de construire des outils décisionnels sur
              mesure, AIFRICA propose un accompagnement structuré,{" "}
              <strong>de la stratégie jusqu'à l'implémentation</strong>.
            </p>

            {/* Bloc clé */}
            <div className="intro-highlight-block">
              <p>
                Nous croyons que la Data et l'IA ne sont pas réservées aux
                grandes entreprises mondiales. Elles sont aujourd'hui{" "}
                <strong>accessibles, adaptables</strong>, et peuvent devenir un
                levier de croissance puissant pour toute organisation — quelle
                que soit sa taille ou son secteur d'activité.
              </p>
            </div>
          </div>

          {/* Citation finale */}
          <div className="intro-tagline">
            <span className="intro-tagline-line"></span>
            <p className="intro-tagline-text">
              AIFRICA, c'est l'intelligence de demain, au service de l'Afrique
              d'aujourd'hui.
            </p>
            <span className="intro-tagline-line"></span>
          </div>

          {/* Piliers clés */}
          <div className="intro-pillars">
            {[
              { icon: "📊", label: "Data" },
              { icon: "🤖", label: "Intelligence Artificielle" },
              { icon: "🌍", label: "Marché Africain" },
              { icon: "🚀", label: "Transformation Numérique" },
            ].map((pillar, i) => (
              <div key={i} className="intro-pillar">
                <span className="intro-pillar-icon">{pillar.icon}</span>
                <span className="intro-pillar-label">{pillar.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro_PlateformeAifrica;
