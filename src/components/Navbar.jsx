import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import logo from "../assets/images/NewLogo.png";
import { useLanguage } from "../contexts/LanguageContext";

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

export default function Navbar() {
  const { language, changeLanguage, t } = useLanguage();
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

  const currentLanguage = language ? language.toUpperCase() : "FR";

  const handleLanguageChange = (lang) => {
    changeLanguage(lang.toLowerCase());
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
      to: "/plateforme-aifrica",
      icon: <FaGlobe />,
      label: t('navbar.yoafrica.links.plateforme'),
      description: t('navbar.yoafrica.links.plateforme_desc'),
    },
    {
      to: "/accompagnement-IA",
      icon: <FaHandsHelping />,
      label: t('navbar.yoafrica.links.accompagnement'),
      description: t('navbar.yoafrica.links.accompagnement_desc'),
    },
    {
      to: "/dataIntelligence",
      icon: <FaBrain />,
      label: t('navbar.yoafrica.links.data'),
      description: t('navbar.yoafrica.links.data_desc'),
    },
    {
      to: "/IA-Générative",
      icon: <FaRobot />,
      label: t('navbar.yoafrica.links.generative'),
      description: t('navbar.yoafrica.links.generative_desc'),
    },
    {
      to: "/IA-Agentique",
      icon: <FaUsersCog />,
      label: t('navbar.yoafrica.links.agentique'),
      description: t('navbar.yoafrica.links.agentique_desc'),
    },
  ];

  const infosLinks = [
    {
      to: "/afrique",
      icon: <FaGlobe />,
      label: t('navbar.infos.links.afrique'),
      description: t('navbar.infos.links.afrique_desc'),
    },
    {
      to: "/entreprise",
      icon: <FaHandsHelping />,
      label: t('navbar.infos.links.industrie'),
      description: t('navbar.infos.links.industrie_desc'),
    },
    {
      to: "/metier",
      icon: <FaBrain />,
      label: t('navbar.infos.links.metier'),
      description: t('navbar.infos.links.metier_desc'),
    },
    {
      to: "/technologie",
      icon: <FaRobot />,
      label: t('navbar.infos.links.technologie'),
      description: t('navbar.infos.links.technologie_desc'),
    },
  ];

  const servicesLinks = [
    {
      to: "/diagnosticDataIA",
      icon: <FaClipboardCheck />,
      label: t('navbar.services.links.diagnostic'),
      description: t('navbar.services.links.diagnostic_desc'),
    },
    {
      to: "/consultingIaData",
      icon: <FaUserTie />,
      label: t('navbar.services.links.consulting'),
      description: t('navbar.services.links.consulting_desc'),
    },
    {
      to: "/acculturationIA",
      icon: <FaLightbulb />,
      label: t('navbar.services.links.acculturation'),
      description: t('navbar.services.links.acculturation_desc'),
    },
    {
      to: "/solutionIASurMesure",
      icon: <FaCogs />,
      label: t('navbar.services.links.solution'),
      description: t('navbar.services.links.solution_desc'),
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
                      <span className="yo-text">Yo!</span> {t('navbar.yoafrica.title')}
                    </h3>
                    <p>{t('navbar.yoafrica.subtitle')}</p>
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
                    <h3>{t('navbar.services.subtitle')}</h3>
                    <p>{t('navbar.services.description')}</p>
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
                    <h3>{t('navbar.infos.subtitle')}</h3>
                    <p>{t('navbar.infos.description')}</p>
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
                  {t('navbar.approach')}
                </button>
              </li>
              <li className="navbar-item">
                <button
                  className="navbar-link"
                  onClick={() => handleNavigateScroll("contact")}
                >
                  {t('navbar.partner')}
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
                {t('navbar.contact')}
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
                <span className="yo-text">Yo!</span> {t('navbar.yoafrica.title')}
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
              <span>{t('navbar.services.title')}</span>
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
              <span>{t('navbar.infos.title')}</span>
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
            {t('navbar.approach')}
          </button>
          <button
            className="mobile-menu-link"
            onClick={() => handleNavigateScroll("contact")}
          >
            {t('navbar.partner')}
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
              {t('navbar.contact_mobile')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
