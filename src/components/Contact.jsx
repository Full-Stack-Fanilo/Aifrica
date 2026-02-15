import React, { useState } from "react";
import "../css/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Le sujet est requis";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simuler l'envoi du formulaire
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header text-center">
        <h3>
          Contactez-<span className="highlighted">nous</span>
        </h3>
        <p>
          Vous avez une question, une idée ou une collaboration sur la Data &
          l'IA en Afrique ? Écrivez-nous, nous serons ravis d'échanger.
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="success-message" style={{
          background: '#d4edda',
          color: '#155724',
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '2rem',
          textAlign: 'center',
          border: '1px solid #c3e6cb'
        }}>
          ✅ Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="error-message" style={{
          background: '#f8d7da',
          color: '#721c24',
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '2rem',
          textAlign: 'center',
          border: '1px solid #f5c6cb'
        }}>
          ❌ Une erreur est survenue. Veuillez réessayer plus tard.
        </div>
      )}

      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Nom Complet</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Votre nom complet"
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message show">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="votre@email.com"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message show">{errors.email}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>
                Téléphone <span className="optional">(optionnel)</span>
              </label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Votre numéro de téléphone"
              />
            </div>
            <div className="form-group">
              <label>Sujet</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Sujet de votre message"
                className={errors.subject ? 'error' : ''}
              />
              {errors.subject && <span className="error-message show">{errors.subject}</span>}
            </div>
          </div>

          <div className="form-group full-width">
            <label>Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Votre message..."
              rows="5"
              className={errors.message ? 'error' : ''}
            ></textarea>
            {errors.message && <span className="error-message show">{errors.message}</span>}
          </div>

          <button 
            type="submit" 
            className={`submit-btn ${isSubmitting ? 'loading' : ''} ${submitStatus === 'success' ? 'success' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? '' : submitStatus === 'success' ? '✓ Envoyé' : 'Envoyer'}
          </button>
        </form>
      </div>
    </section>
  );
}
