import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "../css/Contact.css";


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
  const { t } = useLanguage();
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
        if (!formData.name.trim()) newErrors.name = t('contact.errors.name');
        if (!formData.fonction) newErrors.fonction = t('contact.errors.fonction');
        if (!formData.email.trim()) {
          newErrors.email = t('contact.errors.email');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = t('contact.errors.emailInvalid');
        }
        if (!formData.consent) newErrors.consent = t('contact.errors.consent');
        break;
      case 2:
        if (!formData.orgType) newErrors.orgType = t('contact.errors.orgType');
        if (!formData.secteur) newErrors.secteur = t('contact.errors.secteur');
        if (!formData.taille) newErrors.taille = t('contact.errors.taille');
        if (!formData.pays) newErrors.pays = t('contact.errors.pays');
        break;
      case 3:
        if (!formData.gestionData) newErrors.gestionData = t('contact.errors.gestionData');
        if (!formData.fiabilite) newErrors.fiabilite = t('contact.errors.fiabilite');
        if (!formData.equipeData) newErrors.equipeData = t('contact.errors.equipeData');
        break;
      case 4:
        if (formData.enjeux.length === 0) newErrors.enjeux = t('contact.errors.enjeux');
        if (!formData.envisageIA) newErrors.envisageIA = t('contact.errors.envisageIA');
        break;
      case 5:
        if (!formData.accompagnement) newErrors.accompagnement = t('contact.errors.accompagnement');
        if (!formData.horizon) newErrors.horizon = t('contact.errors.horizon');
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
      <label>{label} <span className="optional">{t('contact.step4.enjeuxMultiple')}</span></label>
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

  const stepTitles = t('contact.stepTitles');

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="form-group full-width">
              <label>{t('contact.step1.nameLabel')}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.step1.namePlaceholder')}
                className={errors.name ? "input-error" : ""}
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>

            <RadioGroup
              name="fonction"
              label={t('contact.step1.functionLabel')}
              options={t('contact.step1.functionOptions')}
            />

            <div className="form-row">
              <div className="form-group">
                <label>{t('contact.step1.emailLabel')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.step1.emailPlaceholder')}
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label>{t('contact.step1.phoneLabel')} <span className="optional">{t('contact.step1.phoneOptional')}</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('contact.step1.phonePlaceholder')}
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
                <span>{t('contact.step1.consent')}</span>
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
              label={t('contact.step2.orgTypeLabel')}
              options={t('contact.step2.orgTypeOptions')}
            />

            <RadioGroup
              name="secteur"
              label={t('contact.step2.secteurLabel')}
              options={t('contact.step2.secteurOptions')}
            />

            <RadioGroup
              name="taille"
              label={t('contact.step2.tailleLabel')}
              options={t('contact.step2.tailleOptions')}
            />

            <div className="form-group full-width">
              <label>{t('contact.step2.paysLabel')}</label>
              <select
                name="pays"
                value={formData.pays}
                onChange={handleChange}
                className={errors.pays ? "input-error" : ""}
              >
                <option value="">{t('contact.step2.paysPlaceholder')}</option>
                {t('contact.countries').map((c) => (
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
              label={t('contact.step3.gestionDataLabel')}
              options={t('contact.step3.gestionDataOptions')}
            />

            <RadioGroup
              name="fiabilite"
              label={t('contact.step3.fiabiliteLabel')}
              options={t('contact.step3.fiabiliteOptions')}
            />

            <RadioGroup
              name="equipeData"
              label={t('contact.step3.equipeDataLabel')}
              options={t('contact.step3.equipeDataOptions')}
            />
          </>
        );

      case 4:
        return (
          <>
            <CheckboxGroup
              name="enjeux"
              label={t('contact.step4.enjeuxLabel')}
              options={t('contact.step4.enjeuxOptions')}
            />

            <RadioGroup
              name="envisageIA"
              label={t('contact.step4.envisageIALabel')}
              options={t('contact.step4.envisageIAOptions')}
            />

            <div className="form-group full-width">
              <label>
                {t('contact.step4.objectifLabel')}{" "}
                <span className="optional">{t('contact.step4.objectifOptional')}</span>
              </label>
              <input
                type="text"
                name="objectifPrincipal"
                value={formData.objectifPrincipal}
                onChange={handleChange}
                placeholder={t('contact.step4.objectifPlaceholder')}
              />
            </div>
          </>
        );

      case 5:
        return (
          <>
            <RadioGroup
              name="accompagnement"
              label={t('contact.step5.accompagnementLabel')}
              options={t('contact.step5.accompagnementOptions')}
            />

            <RadioGroup
              name="horizon"
              label={t('contact.step5.horizonLabel')}
              options={t('contact.step5.horizonOptions')}
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
        <h3
          dangerouslySetInnerHTML={{ __html: t('contact.title') }}
        />
        <p>
          {t('contact.description')}
        </p>
        <span className="form-duration">{t('contact.duration')}</span>
      </div>

      {submitStatus === "success" && (
        <div className="status-message success-msg">
          {t('contact.successMessage')}
        </div>
      )}

      {submitStatus === "error" && (
        <div className="status-message error-msg">
          {t('contact.errorMessage')}
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
          {t('contact.stepLabel').replace('{step}', step).replace('{title}', stepTitles[step - 1])}
        </h4>

        <form className="contact-form" onSubmit={handleSubmit}>
          {renderStep()}

          <div className="form-nav">
            {step > 1 && (
              <button type="button" className="nav-btn prev-btn" onClick={prevStep}>
                {t('contact.previous')}
              </button>
            )}
            {step < totalSteps ? (
              <button type="button" className="nav-btn next-btn" onClick={nextStep}>
                {t('contact.next')}
              </button>
            ) : (
              <button
                type="submit"
                className={`nav-btn submit-btn ${isSubmitting ? "loading" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "" : t('contact.submit')}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
