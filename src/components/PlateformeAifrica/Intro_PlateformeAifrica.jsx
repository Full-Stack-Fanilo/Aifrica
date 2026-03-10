import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const Intro_PlateformeAifrica = () => {
  const { t } = useLanguage();

  return (
    <section className="intro-section">
      <div className="container">
        <div className="intro-wrapper">
          {/* Badge */}
          <div className="intro-badge">
            <span className="intro-badge-dot"></span>{t('plateformeAifrica.intro.badge')}
          </div>

          {/* Titre principal */}
          <h2 className="intro-title">
            {t('plateformeAifrica.intro.title')}{" "}
            <span className="intro-title-highlight">{t('plateformeAifrica.intro.title_highlight')}</span> {t('plateformeAifrica.intro.title_end')}
          </h2>

          {/* Contenu texte */}
          <div className="intro-content">
            <p className="intro-paragraph intro-paragraph--lead">
              {t('plateformeAifrica.intro.paragraph1')}
            </p>

            <div className="intro-divider">
              <span>{t('plateformeAifrica.intro.context')}</span>
            </div>

            <p className="intro-paragraph">
              {t('plateformeAifrica.intro.paragraph2')}{" "}
              <strong>{t('plateformeAifrica.intro.paragraph2_highlight')}</strong>.
            </p>

            <p className="intro-paragraph">
              {t('plateformeAifrica.intro.paragraph3')}{" "}
              <strong>{t('plateformeAifrica.intro.paragraph3_highlight')}</strong>.
            </p>

            {/* Bloc clé */}
            <div className="intro-highlight-block">
              <p>
                {t('plateformeAifrica.intro.highlight_block')}{" "}
                <strong>{t('plateformeAifrica.intro.highlight_block_strong')}</strong>, {t('plateformeAifrica.intro.highlight_block_end')}
              </p>
            </div>
          </div>

          {/* Citation finale */}
          <div className="intro-tagline">
            <span className="intro-tagline-line"></span>
            <p className="intro-tagline-text">
              {t('plateformeAifrica.intro.tagline')}
            </p>
            <span className="intro-tagline-line"></span>
          </div>

          {/* Piliers clés */}
          <div className="intro-pillars">
            {[
              { icon: "📊", label: t('plateformeAifrica.intro.pillars.data') },
              { icon: "🤖", label: t('plateformeAifrica.intro.pillars.ia') },
              { icon: "🌍", label: t('plateformeAifrica.intro.pillars.marche') },
              { icon: "🚀", label: t('plateformeAifrica.intro.pillars.transformation') },
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
