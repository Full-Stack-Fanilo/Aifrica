import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import "../css/Footer.css";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const currentYear = new Date().getFullYear();

  const platformLinks = [
    { to: "/pateforme-aifrica", label: "Plateforme Aifrica" },
    { to: "/accompagnement-IA", label: "Accompagnement IA" },
    { to: "/dataIntelligence", label: "Data Intelligence" },
    { to: "/IA-Générative", label: "IA Générative" },
  ];

  const servicesLinks = [
    { to: "/diagnosticDataIA", label: "Diagnostic Data & IA" },
    { to: "/consultingIaData", label: "Consulting IA & Data" },
    { to: "/acculturationIA", label: "Acculturation IA" },
    { to: "/solutionIASurMesure", label: "Solution IA avancée" },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, url: "#", label: "LinkedIn" },
    { icon: <FaTwitter />, url: "#", label: "Twitter" },
    { icon: <FaFacebook />, url: "#", label: "Facebook" },
    { icon: <FaInstagram />, url: "#", label: "Instagram" },
  ];

  return (
    <footer className="modern-footer">
      {/* Newsletter Section */}
      <div className="footer-newsletter">
        <div className="footer-container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3 className="newsletter-title">
                Restez informé de nos dernières innovations
              </h3>
              <p className="newsletter-subtitle">
                Recevez nos actualités, études de cas et conseils IA directement
                dans votre boîte mail
              </p>
            </div>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="newsletter-input"
              />
              <button className="newsletter-button">
                S'abonner
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-column footer-about">
              <h4 className="footer-title">Aifrica</h4>
              <p className="footer-description">
                Plateforme d'intelligence artificielle dédiée à accompagner les
                entreprises africaines dans leur transformation digitale. Nous
                combinons IA générative, analyse de données et agents IA pour
                automatiser, optimiser et innover.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Platform Links */}
            <div className="footer-column">
              <h4 className="footer-title">Plateforme</h4>
              <ul className="footer-links">
                {platformLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.to} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div className="footer-column">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-links">
                {servicesLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.to} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-column">
              <h4 className="footer-title">Contact</h4>
              <ul className="footer-contact">
                <li className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Email</span>
                    <a
                      href="mailto:contact@aifrica.com"
                      className="contact-value"
                    >
                      contact@aifrica.com
                    </a>
                  </div>
                </li>
                <li className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Téléphone</span>
                    <a href="tel:+33672857741" className="contact-value">
                      +33 6 72 85 77 41
                    </a>
                  </div>
                </li>
                <li className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Localisation</span>
                    <span className="contact-value">Paris, France</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Aifrica. Tous droits réservés.
            </p>
            <div className="footer-legal">
              <button
                className="legal-link"
                onClick={() => scrollToSection("privacy")}
              >
                Politique de confidentialité
              </button>
              <span className="legal-separator">•</span>
              <button
                className="legal-link"
                onClick={() => scrollToSection("terms")}
              >
                Conditions d'utilisation
              </button>
              <span className="legal-separator">•</span>
              <button
                className="legal-link"
                onClick={() => scrollToSection("cookies")}
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
