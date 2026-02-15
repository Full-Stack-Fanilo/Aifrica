import { useState } from "react";
import "../css/Contact.css";

const AFRICAN_COUNTRIES = [
  "Afrique du Sud", "Algérie", "Angola", "Bénin", "Botswana", "Burkina Faso",
  "Burundi", "Cameroun", "Cap-Vert", "Centrafrique", "Comores", "Congo",
  "Côte d'Ivoire", "Djibouti", "Égypte", "Érythrée", "Eswatini", "Éthiopie",
  "Gabon", "Gambie", "Ghana", "Guinée", "Guinée-Bissau", "Guinée équatoriale",
  "Kenya", "Lesotho", "Liberia", "Libye", "Madagascar", "Malawi", "Mali",
  "Maroc", "Maurice", "Mauritanie", "Mozambique", "Namibie", "Niger", "Nigeria",
  "Ouganda", "RD Congo", "Rwanda", "São Tomé-et-Príncipe", "Sénégal",
  "Seychelles", "Sierra Leone", "Somalie", "Soudan", "Soudan du Sud",
  "Tanzanie", "Tchad", "Togo", "Tunisie", "Zambie", "Zimbabwe", "International"
];

const INITIAL_FORM = {
  // Étape 1
  name: "",
  fonction: "",
  email: "",
  phone: "",
  consent: false,
  // Étape 2
  orgType: "",
  secteur: "",
  taille: "",
  pays: "",
  // Étape 3
  gestionData: "",
  fiabilite: "",
  equipeData: "",
  // Étape 4
  enjeux: [],
  envisageIA: "",
  objectifPrincipal: "",
  // Étape 5
  accompagnement: "",
  horizon: "",
};

export default function Contact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const totalSteps = 5;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCheckboxGroup = (name, value) => {
    setFormData((prev) => {
      const arr = prev[name];
      if (arr.includes(value)) {
        return { ...prev, [name]: arr.filter((v) => v !== value) };
      }
      return { ...prev, [name]: [...arr, value] };
    });
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateStep = () => {
    const newErrors = {};
    switch (step) {
      case 1:
        if (!formData.name.trim()) newErrors.name = "Le nom est requis";
        if (!formData.fonction) newErrors.fonction = "La fonction est requise";
        if (!formData.email.trim()) {
          newErrors.email = "L'email est requis";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "L'email n'est pas valide";
        }
        if (!formData.consent) newErrors.consent = "Veuillez accepter d'être contacté";
        break;
      case 2:
        if (!formData.orgType) newErrors.orgType = "Le type d'organisation est requis";
        if (!formData.secteur) newErrors.secteur = "Le secteur est requis";
        if (!formData.taille) newErrors.taille = "La taille est requise";
        if (!formData.pays) newErrors.pays = "Le pays est requis";
        break;
      case 3:
        if (!formData.gestionData) newErrors.gestionData = "Ce champ est requis";
        if (!formData.fiabilite) newErrors.fiabilite = "Ce champ est requis";
        if (!formData.equipeData) newErrors.equipeData = "Ce champ est requis";
        break;
      case 4:
        if (formData.enjeux.length === 0) newErrors.enjeux = "Sélectionnez au moins un enjeu";
        if (!formData.envisageIA) newErrors.envisageIA = "Ce champ est requis";
        break;
      case 5:
        if (!formData.accompagnement) newErrors.accompagnement = "Ce champ est requis";
        if (!formData.horizon) newErrors.horizon = "Ce champ est requis";
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep((s) => Math.min(s + 1, totalSteps));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData(INITIAL_FORM);
      setStep(1);
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const RadioGroup = ({ name, label, options }) => (
    <div className="form-group full-width">
      <label>{label}</label>
      <div className="radio-group">
        {options.map((opt) => (
          <label
            key={opt}
            className={`radio-option ${formData[name] === opt ? "selected" : ""}`}
          >
            <input
              type="radio"
              name={name}
              value={opt}
              checked={formData[name] === opt}
              onChange={handleChange}
            />
            <span className="radio-label">{opt}</span>
          </label>
        ))}
      </div>
      {errors[name] && <span className="field-error">{errors[name]}</span>}
    </div>
  );

  const CheckboxGroup = ({ name, label, options }) => (
    <div className="form-group full-width">
      <label>{label} <span className="optional">(choix multiple)</span></label>
      <div className="radio-group">
        {options.map((opt) => (
          <label
            key={opt}
            className={`radio-option ${formData[name].includes(opt) ? "selected" : ""}`}
          >
            <input
              type="checkbox"
              checked={formData[name].includes(opt)}
              onChange={() => handleCheckboxGroup(name, opt)}
            />
            <span className="radio-label">{opt}</span>
          </label>
        ))}
      </div>
      {errors[name] && <span className="field-error">{errors[name]}</span>}
    </div>
  );

  const stepTitles = [
    "Contact",
    "Profil de l'entreprise",
    "Situation Data actuelle",
    "Besoins & priorités",
    "Accompagnement souhaité",
  ];

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="form-group full-width">
              <label>Nom & prénom</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom complet"
                className={errors.name ? "input-error" : ""}
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>

            <RadioGroup
              name="fonction"
              label="Fonction"
              options={["Dirigeant", "Manager", "Responsable IT / Data", "Autre"]}
            />

            <div className="form-row">
              <div className="form-group">
                <label>Email professionnel</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label>Téléphone <span className="optional">(optionnel)</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Votre numéro"
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label className={`consent-label ${errors.consent ? "consent-error" : ""}`}>
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                />
                <span>J'accepte d'être contacté par Aifrica</span>
              </label>
              {errors.consent && <span className="field-error">{errors.consent}</span>}
            </div>
          </>
        );

      case 2:
        return (
          <>
            <RadioGroup
              name="orgType"
              label="Type d'organisation"
              options={["PME", "Startup", "Grande entreprise", "Institution / Organisation publique"]}
            />

            <RadioGroup
              name="secteur"
              label="Secteur d'activité"
              options={[
                "Finance / Assurance", "Télécoms", "Industrie / Énergie",
                "Commerce / Distribution", "Logistique / Transport",
                "Santé", "Agriculture", "Autre"
              ]}
            />

            <RadioGroup
              name="taille"
              label="Taille de l'organisation"
              options={["1–10 employés", "11–50", "51–200", "200+"]}
            />

            <div className="form-group full-width">
              <label>Pays principal d'activité</label>
              <select
                name="pays"
                value={formData.pays}
                onChange={handleChange}
                className={errors.pays ? "input-error" : ""}
              >
                <option value="">-- Sélectionnez un pays --</option>
                {AFRICAN_COUNTRIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errors.pays && <span className="field-error">{errors.pays}</span>}
            </div>
          </>
        );

      case 3:
        return (
          <>
            <RadioGroup
              name="gestionData"
              label="Comment gérez-vous vos données aujourd'hui ?"
              options={[
                "Principalement sur Excel / Google Sheets",
                "Plusieurs outils non connectés",
                "Outils BI (Power BI, Tableau, etc.)",
                "Systèmes data structurés (bases, cloud, etc.)",
                "Je ne sais pas / Pas encore structuré"
              ]}
            />

            <RadioGroup
              name="fiabilite"
              label="Vos données sont-elles fiables et exploitables ?"
              options={["Oui, en grande partie", "Partiellement", "Non", "Je ne sais pas"]}
            />

            <RadioGroup
              name="equipeData"
              label="Avez-vous une équipe data / IT dédiée ?"
              options={["Oui (interne)", "Oui (prestataires)", "Non", "En cours de structuration"]}
            />
          </>
        );

      case 4:
        return (
          <>
            <CheckboxGroup
              name="enjeux"
              label="Quels sont vos principaux enjeux aujourd'hui ?"
              options={[
                "Meilleure prise de décision",
                "Optimisation des coûts",
                "Amélioration de la relation client",
                "Prévision (ventes, demande, risques...)",
                "Automatisation de processus",
                "Structuration des données",
                "Innovation / avantage concurrentiel"
              ]}
            />

            <RadioGroup
              name="envisageIA"
              label="Avez-vous déjà envisagé l'IA dans votre organisation ?"
              options={[
                "Oui, déjà en cours",
                "Oui, à l'étude",
                "Non, mais intéressé",
                "Non, pas encore prêt"
              ]}
            />

            <div className="form-group full-width">
              <label>
                Quel est votre objectif principal avec la data / l'IA ?{" "}
                <span className="optional">(optionnel)</span>
              </label>
              <input
                type="text"
                name="objectifPrincipal"
                value={formData.objectifPrincipal}
                onChange={handleChange}
                placeholder='Ex : "Mieux comprendre nos clients"'
              />
            </div>
          </>
        );

      case 5:
        return (
          <>
            <RadioGroup
              name="accompagnement"
              label="Quel type d'accompagnement recherchez-vous ?"
              options={[
                "Diagnostic Data & IA",
                "Conseil stratégique",
                "Formation / acculturation",
                "Développement de solutions IA",
                "Pilotage global de projets",
                "Je ne sais pas encore"
              ]}
            />

            <RadioGroup
              name="horizon"
              label="Horizon de temps"
              options={[
                "Immédiat (0–3 mois)",
                "Court terme (3–6 mois)",
                "Moyen terme (6–12 mois)",
                "Exploration / réflexion"
              ]}
            />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header text-center">
        <h3>
          Diagnostic Data &{" "}
          <span className="highlighted">Intelligence Artificielle</span>
        </h3>
        <p>
          Ce questionnaire a pour objectif de mieux comprendre votre
          organisation, vos enjeux Data & IA et de vous proposer un
          accompagnement adapté.
        </p>
        <span className="form-duration">Temps estimé : 3 à 5 minutes</span>
      </div>

      {submitStatus === "success" && (
        <div className="status-message success-msg">
          Votre diagnostic a été envoyé avec succès ! Nous vous contacterons
          dans les plus brefs délais.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="status-message error-msg">
          Une erreur est survenue. Veuillez réessayer plus tard.
        </div>
      )}

      <div className="contact-form-container">
        {/* Progress bar */}
        <div className="stepper">
          {stepTitles.map((title, i) => (
            <div
              key={i}
              className={`stepper-step ${i + 1 <= step ? "active" : ""} ${
                i + 1 < step ? "completed" : ""
              }`}
            >
              <div className="stepper-circle">{i + 1 < step ? "\u2713" : i + 1}</div>
              <span className="stepper-label">{title}</span>
            </div>
          ))}
          <div className="stepper-line">
            <div
              className="stepper-line-fill"
              style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
            />
          </div>
        </div>

        <h4 className="step-title">
          Étape {step} — {stepTitles[step - 1]}
        </h4>

        <form className="contact-form" onSubmit={handleSubmit}>
          {renderStep()}

          <div className="form-nav">
            {step > 1 && (
              <button type="button" className="nav-btn prev-btn" onClick={prevStep}>
                Précédent
              </button>
            )}
            {step < totalSteps ? (
              <button type="button" className="nav-btn next-btn" onClick={nextStep}>
                Suivant
              </button>
            ) : (
              <button
                type="submit"
                className={`nav-btn submit-btn ${isSubmitting ? "loading" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "" : "Envoyer le diagnostic"}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
