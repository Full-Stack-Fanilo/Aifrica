import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import "../css/Footer.css";

export default function Footer() {
  const { t } = useLanguage();
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const currentYear = new Date().getFullYear();

  const platformLinks = t('footer.platform.links');
  const servicesLinks = t('footer.services.links');

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
                {t('footer.newsletter.title')}
              </h3>
              <p className="newsletter-subtitle">
                {t('footer.newsletter.subtitle')}
              </p>
            </div>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="newsletter-input"
              />
              <button className="newsletter-button">
                {t('footer.newsletter.button')}
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
              <h4 className="footer-title">{t('footer.about.title')}</h4>
              <p className="footer-description">
                {t('footer.about.description')}
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
              <h4 className="footer-title">{t('footer.platform.title')}</h4>
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
              <h4 className="footer-title">{t('footer.services.title')}</h4>
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
              <h4 className="footer-title">{t('footer.contact.title')}</h4>
              <ul className="footer-contact">
                <li className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">{t('footer.contact.emailLabel')}</span>
                    <a
                      href={`mailto:${t('footer.contact.email')}`}
                      className="contact-value"
                    >
                      {t('footer.contact.email')}
                    </a>
                  </div>
                </li>
                <li className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">{t('footer.contact.locationLabel')}</span>
                    <span className="contact-value">{t('footer.contact.location')}</span>
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
              {t('footer.legal.copyright').replace('{year}', currentYear)}
            </p>
            <div className="footer-legal">
              <button
                className="legal-link"
                onClick={() => scrollToSection("privacy")}
              >
                {t('footer.legal.privacy')}
              </button>
              <span className="legal-separator">•</span>
              <button
                className="legal-link"
                onClick={() => scrollToSection("terms")}
              >
                {t('footer.legal.terms')}
              </button>
              <span className="legal-separator">•</span>
              <button
                className="legal-link"
                onClick={() => scrollToSection("cookies")}
              >
                {t('footer.legal.cookies')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
