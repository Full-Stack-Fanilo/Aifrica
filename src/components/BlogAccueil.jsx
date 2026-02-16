import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/BlogAccueil.css";
import blog1 from "../assets/images/ia.png";
import blog2 from "../assets/images/africaines.png";
import blog3 from "../assets/images/finance.jpg";
import blog4 from "../assets/images/agricultur.jpg";
import blog5 from "../assets/images/automatisatio.png";
import blog6 from "../assets/images/automatisation.png";

const categories = ["Afrique", "Entreprise", "Métier", "Technologie"];

// Données des blogs avec catégories
const allBlogs = [
  {
    id: 1,
    image: blog1,
    title: "Baromètre européen de l'IA : les tendances pour 2025",
    tag: "Afrique",
    category: "Afrique",
    date: "19/03/2025",
    description:
      "Le Baromètre européen de l'IA dévoile les tendances majeures attendues en 2025.",
    link: "#",
  },
  {
    id: 2,
    image: blog2,
    title: "Comment l'IA transforme les entreprises africaines",
    tag: "Afrique",
    category: "Afrique",
    date: "20/02/2025",
    description:
      "L'impact de l'intelligence artificielle dans les PME en Afrique.",
    link: "#",
  },
  {
    id: 3,
    image: blog3,
    title: "L'IA dans le secteur de la finance",
    tag: "Entreprise",
    category: "Entreprise",
    date: "15/03/2025",
    description:
      "Comment les entreprises financières utilisent l'IA pour optimiser leurs opérations.",
    link: "#",
  },
  {
    id: 4,
    image: blog4,
    title: "L'essor du Big Data dans l'agriculture",
    tag: "Technologie",
    category: "Technologie",
    date: "10/03/2025",
    description:
      "Le Big Data révolutionne l'agriculture avec des solutions innovantes.",
    link: "#",
  },
  {
    id: 5,
    image: blog5,
    title: "L'avenir du travail avec l'automatisation",
    tag: "Métier",
    category: "Métier",
    date: "05/03/2025",
    description:
      "L'automatisation transforme les métiers et crée de nouvelles opportunités.",
    link: "#",
  },
  {
    id: 6,
    image: blog6,
    title: "Cybersécurité et protection des données",
    tag: "Technologie",
    category: "Technologie",
    date: "01/03/2025",
    description:
      "Les enjeux de la cybersécurité à l'ère de l'intelligence artificielle.",
    link: "#",
  },
];

export default function BlogAccueil() {
  const [activeCategory, setActiveCategory] = useState("Afrique");

  const filteredBlogs = allBlogs.filter(
    (blog) => blog.category === activeCategory
  );

  // Prendre les 2 premiers comme blogs principaux, le reste en sidebar
  const mainBlogs = filteredBlogs.slice(0, 2);
  const sideBlogs = filteredBlogs.length > 2 ? filteredBlogs.slice(2) : [];

  // Si pas assez de blogs dans la catégorie, afficher les autres catégories en sidebar
  const otherBlogs =
    sideBlogs.length === 0
      ? allBlogs
          .filter((blog) => blog.category !== activeCategory)
          .slice(0, 4)
      : sideBlogs;

  return (
    <section id="blog" className="blog-section">
      {/* === EN-TÊTE === */}
      <header className="blog-header">
        <h1 className="blog-title">
          LES <span>INFOS</span>
        </h1>

        {/* === BOUTONS DE CATÉGORIE === */}
        <div className="blog-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`blog-cat-btn ${activeCategory === cat ? "active" : ""}`}
              onMouseEnter={() => setActiveCategory(cat)}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* === CONTAINER GLOBAL === */}
      <div className="blog-container" key={activeCategory}>
        {/* === CARDS PRINCIPALES === */}
        {mainBlogs.map((blog) => (
          <article key={blog.id} className="blog-card large">
            <div className="blog-img-wrapper">
              <img
                src={blog.image}
                className="blog-img"
                alt={blog.title}
                loading="lazy"
              />
              <div className="blog-img-overlay">
                <h2>{blog.title}</h2>
              </div>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span className="blog-tag">{blog.tag}</span>
                <time className="blog-date" dateTime={blog.date}>
                  {blog.date}
                </time>
              </div>
              <p className="blog-text">{blog.description}</p>
              <Link to={blog.link} className="blog-link">
                Découvrir plus
              </Link>
            </div>
          </article>
        ))}

        {/* === LISTE LATÉRALE === */}
        <aside className="blog-list">
          {otherBlogs.map((blog) => (
            <article key={blog.id} className="blog-item">
              <div>
                <span className="blog-item-tag">{blog.tag}</span>
                <h3>{blog.title}</h3>
                <Link to={blog.link} className="blog-item-link">
                  Découvrir plus
                </Link>
              </div>
              <img src={blog.image} alt={blog.title} loading="lazy" />
            </article>
          ))}
        </aside>
      </div>
    </section>
  );
}
