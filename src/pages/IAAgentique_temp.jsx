import React from "react";
import "../css/IAAgentique.css";
import {
  FaArrowRight,
  FaCogs,
  FaRobot,
  FaBrain,
  FaChartLine,
  FaLock,
} from "react-icons/fa";
import FAQ_IAAgentique from "../components/IAAgentique/FAQ_IAAgentique";
import CallToAction_IAAgentique from "../components/IAAgentique/CallToAction_IAAgentique";

const IAAgentique = () => {
  return (
    <div>
      {/* === SECTION 1 : INTRO === */}
      <section className="solution-ia">
        <div className="solution-ia-container">
          <div className="solution-ia-header">
            <h2>
              IA <span className="ia-bold">Agentique</span>
            </h2>

            <p>
              L'IA agentique marque une nouvelle ère : celle d'agents autonomes
              capables d'analyser, décider et exécuter des tâches complexes au
              sein de votre organisation. Une révolution que Aifrica déploie
              pour transformer durablement vos processus.
            </p>
          </div>

          <div className="solution-ia-content">
            {/* GAUCHE */}
            <div className="solution-ia-left">
              <h3>Qu'est-ce que l'IA agentique ?</h3>
              <p>
                Un agent IA est un système autonome qui comprend son
                environnement, prend des décisions et exécute des actions
                séquentielles. Il apprend en continu et s'adapte aux imprévus,
                en s'intégrant directement à vos outils métiers.
              </p>

              <ul className="ia-list">
                <li>
                  <FaArrowRight className="ia-icon" /> Automatisation
                  intelligente de tâches complexes
                </li>
                <li>
                  <FaArrowRight className="ia-icon" /> Agents IA travaillant
                  24/7
                </li>
                <li>
                  <FaArrowRight className="ia-icon" /> Adaptation continue grâce
                  au machine learning
                </li>
                <li>
                  <FaArrowRight className="ia-icon" /> Réduction des erreurs et
                  gain de temps réel
                </li>
              </ul>
            </div>

            {/* DROITE */}
            {/* <div className="solution-ia-right">
              <div className="ia-stat-card">
                <h1>+90%</h1>
                <p className="stat-sub">de gains mesurés</p>
                <p className="stat-note">
                  Moins de coûts, plus de précision, décisions accélérées
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* === SECTION 2 : APPLICATIONS === */}
      <section className="ia-solutions-grid">
        <div className="ia-solutions-container">
          <h2>Applications en entreprise</h2>
          <p className="subtitle">
            L'IA agentique révolutionne les opérations en automatisant des flux
            métier entiers, tout en s'adaptant aux imprévus.
          </p>

          <div className="ia-solutions-cards">
            <div className="ia-solution-card">
              <div className="ia-icon-box blue1">
                <FaRobot />
              </div>
              <h4>Automatisation intelligente</h4>
              <p>
                Les agents IA exécutent des suites d'actions complexes,
                dépassant la simple automatisation basée sur des règles fixes.
              </p>
            </div>

            <div className="ia-solution-card">
              <div className="ia-icon-box purple1">
                <FaBrain />
              </div>
              <h4>Adaptation aux imprévus</h4>
              <p>
                L'IA s'ajuste en temps réel en fonction des situations,
                décisions et données disponibles.
              </p>
            </div>

            <div className="ia-solution-card">
              <div className="ia-icon-box green">
                <FaChartLine />
              </div>
              <h4>Productivité augmentée</h4>
              <p>
                Vos équipes se concentrent sur des tâches à forte valeur
                ajoutée, l'agent IA gère le reste.
              </p>
            </div>

            <div className="ia-solution-card">
              <div className="ia-icon-box orange1">
                <FaCogs />
              </div>
              <h4>Orchestration métiers</h4>
              <p>
                L'agent interagit avec vos outils (ERP, bases de données,
                documents, applications internes…) pour exécuter des workflows
                complets.
              </p>
            </div>

            <div className="ia-solution-card">
              <div className="ia-icon-box red1">
                <FaLock />
              </div>
              <h4>Sécurité & Traçabilité</h4>
              <p>
                Aifrica garantit un haut niveau de confidentialité et de
                contrôle des actions grâce aux protocoles MCP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION 3 : COMPARAISON === */}
      <section className="ia-developpement">
        <div className="ia-developpement-container">
          <h2>
            IA agentique <span className="highlight">vs</span> automatisation IA
          </h2>

          <p className="ia-developpement-subtitle">
            Deux approches souvent confondues — mais dont l'impact est
            radicalement différent.
          </p>

          <div className="ia-steps">
            <div className="ia-step">
              <div className="ia-step-number">1</div>
              <div className="ia-step-content">
                <h3>Automatisation IA</h3>
                <p>
                  Exécute des tâches prédéfinies, basées sur des règles fixes.
                  Peu flexible face aux imprévus.
                </p>
              </div>
            </div>

            <div className="ia-arrow">↓</div>

            <div className="ia-step">
              <div className="ia-step-number">2</div>
              <div className="ia-step-content">
                <h3>IA Agentique</h3>
                <p>
                  Comprend, planifie, décide et exécute de manière autonome.
                  Gère les exceptions et apprend en continu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION 4 : TECHNOLOGIE === */}
      {/* <section className="solution-ia">
        <div className="solution-ia-container">
          <div className="solution-ia-header">
            <h2>
              Notre <span className="highlight">méthodologie</span>
            </h2>
            <p>
              Aifrica exploite les technologies les plus avancées, notamment le
              protocole MCP, pour créer des agents IA sécurisés, intégrés et
              performants.
            </p>
          </div>

          <div className="solution-ia-content">
            <div className="solution-ia-left">
              <h3>Agents IA conçus pour votre organisation</h3>
              <p>
                Chaque agent est calibré selon vos processus, vos besoins et vos
                outils métiers. L'objectif : un déploiement rapide et des
                résultats visibles dès les premières semaines.
              </p>

              <ul className="ia-list">
                <li>
                  <FaArrowRight className="ia-icon" /> Confidentialité renforcée
                </li>
                <li>
                  <FaArrowRight className="ia-icon" /> Sécurité et traçabilité
                  garanties
                </li>
                <li>
                  <FaArrowRight className="ia-icon" /> Intégration transparente
                  à votre SI
                </li>
                <li>
                  <FaArrowRight className="ia-icon" /> Agents personnalisés
                  selon vos besoins
                </li>
              </ul>
            </div>

            <div className="solution-ia-right">
              <div className="ia-stat-card">
                <h1>MCP</h1>
                <p className="stat-sub">Model Context Protocol</p>
                <p className="stat-note">
                  La technologie clé pour orchestrer vos données, vos outils et
                  vos utilisateurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ */}
      <FAQ_IAAgentique />

      {/* CTA */}
      {/* <CallToAction_IAAgentique /> */}
    </div>
  );
};

export default IAAgentique;
