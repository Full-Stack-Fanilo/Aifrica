import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import logo from "../assets/images/2.png";

import {
  FaGlobe,
  FaHandsHelping,
  FaBrain,
  FaRobot,
  FaUsersCog,
  FaClipboardCheck,
  FaUserTie,
  FaLightbulb,
  FaCogs,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

import "../css/Navbar.css";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { i18n } = useTranslation();
  const [isMegaOpen, setIsMegaOpen] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaOpen(null);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const currentLanguage = i18n.language ? i18n.language.toUpperCase() : "FR";

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
  };

  const handleNavigateScroll = (section) => {
    setIsMobileMenuOpen(false);
    setIsMegaOpen(null);

    if (location.pathname === "/") {
      if (section === "top") {
        scroll.scrollToTop({
          duration: 600,
          smooth: "easeInOutQuart",
        });
      } else {
        const el = document.getElementById(section);
        if (el) {
          scroll.scrollTo(el.offsetTop - 80, {
            duration: 600,
            smooth: "easeInOutQuart",
          });
        }
      }
    } else {
      navigate(`/#${section}`);
    }
  };

  const scrollToTop = () => {
    setIsMobileMenuOpen(false);
    setIsMegaOpen(null);
    scroll.scrollToTop({
      duration: 600,
      smooth: "easeInOutQuart",
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMegaOpen(null);
  };

  const yoAfricaLinks = [
    {
      to: "/pateforme-aifrica",
      icon: <FaGlobe />,
      label: "Plateforme Aifrica",
      description: "Découvrez notre écosystème",
    },
    {
      to: "/accompagnement-IA",
      icon: <FaHandsHelping />,
      label: "Accompagnement IA",
      description: "Support personnalisé",
    },
    {
      to: "/dataIntelligence",
      icon: <FaBrain />,
      label: "Data Intelligence",
      description: "Valorisez vos données",
    },
    {
      to: "/IA-Générative",
      icon: <FaRobot />,
      label: "IA Générative",
      description: "Solutions créatives",
    },
    {
      to: "/IA-Agentique",
      icon: <FaUsersCog />,
      label: "IA Agentique",
      description: "Automatisation intelligente",
    },
  ];

  const infosLinks = [
    {
      to: "/afrique",
      icon: <FaGlobe />,
      label: "Afrique",
      description: "Actualités africaines",
    },
    {
      to: "/entreprise",
      icon: <FaHandsHelping />,
      label: "Entreprise",
      description: "Vie de l'entreprise",
    },
    {
      to: "/metier",
      icon: <FaBrain />,
      label: "Métier",
      description: "Carrières et compétences",
    },
    {
      to: "/technologie",
      icon: <FaRobot />,
      label: "Technologie",
      description: "Innovations tech",
    },
  ];

  const servicesLinks = [
    {
      to: "/diagnosticDataIA",
      icon: <FaClipboardCheck />,
      label: "Diagnostic Data & IA",
      description: "Audit complet",
    },
    {
      to: "/consultingIaData",
      icon: <FaUserTie />,
      label: "Consulting IA & Data",
      description: "Expertise stratégique",
    },
    {
      to: "/acculturationIA",
      icon: <FaLightbulb />,
      label: "Acculturation IA",
      description: "Formation & sensibilisation",
    },
    {
      to: "/solutionIASurMesure",
      icon: <FaCogs />,
      label: "Solution IA avancée",
      description: "Développement sur mesure",
    },
  ];

  return (
    <>
      <nav className={`modern-navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          {/* Logo */}
          <button
            className="navbar-logo-link"
            onClick={scrollToTop}
          >
            <img src={logo} alt="Aifrica Logo" className="navbar-logo-img" />
          </button>

          {/* Desktop Navigation */}
          <div className="navbar-desktop">
            <ul className="navbar-menu">
              {/* Yo! Aifrica Mega Menu */}
              <li
                className="navbar-item mega-menu-item"
                onMouseEnter={() => setIsMegaOpen("yoafrica")}
                onMouseLeave={() => setIsMegaOpen(null)}
              >
                <button 
                  className="navbar-link"
                  onClick={scrollToTop}
                >
                  <span className="yo-text">Yo!</span> Aifrica
                  <FaChevronDown
                    className={`dropdown-icon ${isMegaOpen === "yoafrica" ? "rotated" : ""}`}
                  />
                </button>
                <div
                  className={`mega-menu ${isMegaOpen === "yoafrica" ? "active" : ""}`}
                >
                  <div className="mega-menu-header">
                    <h3>
                      <span className="yo-text">Yo!</span> Aifrica
                    </h3>
                    <p>Découvrez notre univers d'innovation</p>
                  </div>
                  <div className="mega-menu-content">
                    {yoAfricaLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={link.to}
                        className="mega-menu-link"
                        onClick={() => setIsMegaOpen(null)}
                      >
                        <div className="mega-link-icon">{link.icon}</div>
                        <div className="mega-link-text">
                          <span className="mega-link-title">{link.label}</span>
                          <span className="mega-link-desc">
                            {link.description}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {/* Services Mega Menu */}
              <li
                className="navbar-item mega-menu-item"
                onMouseEnter={() => setIsMegaOpen("services")}
                onMouseLeave={() => setIsMegaOpen(null)}
              >
                <button 
                  className="navbar-link"
                  onClick={() => handleNavigateScroll("services")}
                >
                  Services
                  <FaChevronDown
                    className={`dropdown-icon ${isMegaOpen === "services" ? "rotated" : ""}`}
                  />
                </button>
                <div
                  className={`mega-menu ${isMegaOpen === "services" ? "active" : ""}`}
                >
                  <div className="mega-menu-header">
                    <h3>Nos Services</h3>
                    <p>Des solutions adaptées à vos besoins</p>
                  </div>
                  <div className="mega-menu-content">
                    {servicesLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={link.to}
                        className="mega-menu-link"
                        onClick={() => setIsMegaOpen(null)}
                      >
                        <div className="mega-link-icon">{link.icon}</div>
                        <div className="mega-link-text">
                          <span className="mega-link-title">{link.label}</span>
                          <span className="mega-link-desc">
                            {link.description}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {/* Infos Mega Menu */}
              <li
                className="navbar-item mega-menu-item"
                onMouseEnter={() => setIsMegaOpen("infos")}
                onMouseLeave={() => setIsMegaOpen(null)}
              >
                <button 
                  className="navbar-link"
                  onClick={() => handleNavigateScroll("infos")}
                >
                  Infos
                  <FaChevronDown
                    className={`dropdown-icon ${isMegaOpen === "infos" ? "rotated" : ""}`}
                  />
                </button>
                <div
                  className={`mega-menu ${isMegaOpen === "infos" ? "active" : ""}`}
                >
                  <div className="mega-menu-header">
                    <h3>Nos Infos</h3>
                    <p>Découvrez nos actualités</p>
                  </div>
                  <div className="mega-menu-content">
                    {infosLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={link.to}
                        className="mega-menu-link"
                        onClick={() => setIsMegaOpen(null)}
                      >
                        <div className="mega-link-icon">{link.icon}</div>
                        <div className="mega-link-text">
                          <span className="mega-link-title">{link.label}</span>
                          <span className="mega-link-desc">
                            {link.description}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
              <li className="navbar-item">
                <button
                  className="navbar-link"
                  onClick={() => handleNavigateScroll("approach")}
                >
                  Approche
                </button>
              </li>
              <li className="navbar-item">
                <button
                  className="navbar-link"
                  onClick={() => handleNavigateScroll("contact")}
                >
                  Partenaire
                </button>
              </li>
            </ul>

            {/* Right Side Actions */}
            <div className="navbar-actions">
              <select
                className="language-selector"
                value={currentLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
              >
                <option value="FR">🇫🇷 FR</option>
                <option value="EN">🇬🇧 EN</option>
              </select>

              <button
                className="btn-contact"
                onClick={() => handleNavigateScroll("contact")}
              >
                Contactez-nous
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? "active" : ""}`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-content">
          {/* Yo! Aifrica */}
          <div className="mobile-menu-section">
            <button
              className="mobile-section-title"
              onClick={() => {
                scrollToTop();
                setIsMegaOpen(isMegaOpen === "yoafrica" ? null : "yoafrica");
              }}
            >
              <span>
                <span className="yo-text">Yo!</span> Aifrica
              </span>
              <FaChevronDown
                className={`dropdown-icon ${isMegaOpen === "yoafrica" ? "rotated" : ""}`}
              />
            </button>
            <div
              className={`mobile-submenu ${isMegaOpen === "yoafrica" ? "active" : ""}`}
            >
              {yoAfricaLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="mobile-submenu-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="mobile-link-icon">{link.icon}</div>
                  <div className="mobile-link-text">
                    <span className="mobile-link-title">{link.label}</span>
                    <span className="mobile-link-desc">{link.description}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mobile-menu-section">
            <button
              className="mobile-section-title"
              onClick={() => {
                handleNavigateScroll("services");
                setIsMegaOpen(isMegaOpen === "services" ? null : "services");
              }}
            >
              <span>Services</span>
              <FaChevronDown
                className={`dropdown-icon ${isMegaOpen === "services" ? "rotated" : ""}`}
              />
            </button>
            <div
              className={`mobile-submenu ${isMegaOpen === "services" ? "active" : ""}`}
            >
              {servicesLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="mobile-submenu-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="mobile-link-icon">{link.icon}</div>
                  <div className="mobile-link-text">
                    <span className="mobile-link-title">{link.label}</span>
                    <span className="mobile-link-desc">{link.description}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Infos */}
          <div className="mobile-menu-section">
            <button
              className="mobile-section-title"
              onClick={() => {
                handleNavigateScroll("infos");
                setIsMegaOpen(isMegaOpen === "infos" ? null : "infos");
              }}
            >
              <span>Infos</span>
              <FaChevronDown
                className={`dropdown-icon ${isMegaOpen === "infos" ? "rotated" : ""}`}
              />
            </button>
            <div
              className={`mobile-submenu ${isMegaOpen === "infos" ? "active" : ""}`}
            >
              {infosLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="mobile-submenu-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="mobile-link-icon">{link.icon}</div>
                  <div className="mobile-link-text">
                    <span className="mobile-link-title">{link.label}</span>
                    <span className="mobile-link-desc">{link.description}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <button
            className="mobile-menu-link"
            onClick={() => handleNavigateScroll("approach")}
          >
            Approche
          </button>
          <button
            className="mobile-menu-link"
            onClick={() => handleNavigateScroll("contact")}
          >
            Partenaire
          </button>

          {/* Mobile Actions */}
          <div className="mobile-menu-actions">
            <select
              className="language-selector"
              value={currentLanguage}
              onChange={(e) => handleLanguageChange(e.target.value)}
            >
              <option value="FR">🇫🇷 FR</option>
              <option value="EN">🇬🇧 EN</option>
            </select>
            <button
              className="btn-contact"
              onClick={() => handleNavigateScroll("contact")}
            >
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
