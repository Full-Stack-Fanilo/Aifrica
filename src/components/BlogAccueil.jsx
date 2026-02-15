import React from "react";
import { Link } from "react-router-dom";
import "../css/BlogAccueil.css";
import blog1 from "../assets/images/ia.png";
import blog2 from "../assets/images/africaines.png";
import blog3 from "../assets/images/finance.jpg";
import blog4 from "../assets/images/agricultur.jpg";
import blog5 from "../assets/images/automatisatio.png";
import blog6 from "../assets/images/automatisation.png";

// Données des blogs pour faciliter la maintenance
const mainBlogs = [
  {
    id: 1,
    image: blog1,
    title: "Baromètre européen de l'IA : les tendances pour 2025",
    tag: "Africa",
    date: "19/03/2025",
    description:
      "Le Baromètre européen de l'IA dévoile les tendances majeures attendues en 2025.",
    link: "#",
  },
  {
    id: 2,
    image: blog2,
    title: "Comment l'IA transforme les entreprises africaines",
    tag: "Africa",
    date: "20/02/2025",
    description:
      "L'impact de l'intelligence artificielle dans les PME en Afrique.",
    link: "#",
  },
];

const sideBlogs = [
  {
    id: 3,
    title: "L'IA dans le secteur de la finance",
    image: blog3,
    link: "#",
  },
  {
    id: 4,
    title: "L'essor du Big Data dans l'agriculture",
    image: blog4,
    link: "#",
  },
  {
    id: 5,
    title: "L'avenir du travail avec l'automatisation",
    image: blog5,
    link: "#",
  },
  {
    id: 6,
    title: "Cybersécurité et protection des données",
    image: blog6,
    link: "#",
  },
];

export default function BlogAccueil() {
  return (
    <section id="blog" className="blog-section">
      {/* === EN-TÊTE === */}
      <header className="blog-header">
        <h1 className="blog-title">
          Nos <span>blogs</span>
        </h1>
        <p className="blog-sub">
          Les actualités récentes de la Data et l'IA en Afrique
        </p>
      </header>

      {/* === CONTAINER GLOBAL === */}
      <div className="blog-container">
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
          {sideBlogs.map((blog) => (
            <article key={blog.id} className="blog-item">
              <div>
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
