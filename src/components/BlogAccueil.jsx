import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/BlogAccueil.css";
import blog1 from "../assets/images/ia.png";
import blog2 from "../assets/images/africaines.png";
import blog3 from "../assets/images/finance.jpg";
import blog4 from "../assets/images/agricultur.jpg";
import blog5 from "../assets/images/automatisatio.png";
import blog6 from "../assets/images/automatisation.png";

const categories = ["Afrique", "Entreprise", "Métier", "Technologie"];

const allBlogs = [
  {
    id: 1,
    image: blog1,
    title: "Baromètre européen de l'IA : les tendances pour 2025",
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

  // Si la catégorie a peu de blogs, compléter avec d'autres
  const displayBlogs =
    filteredBlogs.length >= 3
      ? filteredBlogs
      : [
          ...filteredBlogs,
          ...allBlogs
            .filter((b) => b.category !== activeCategory)
            .slice(0, 4 - filteredBlogs.length),
        ];

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

      {/* === GRILLE DE CARTES === */}
      <div className="blog-grid" key={activeCategory}>
        {displayBlogs.map((blog) => (
          <article key={blog.id} className="blog-card">
            <div className="blog-card-img">
              <img src={blog.image} alt={blog.title} loading="lazy" />
              <div className="blog-card-badge">{blog.category}</div>
            </div>
            <div className="blog-card-body">
              <time className="blog-card-date">{blog.date}</time>
              <h3 className="blog-card-title">{blog.title}</h3>
              <p className="blog-card-desc">{blog.description}</p>
              <Link to={blog.link} className="blog-card-link">
                Lire plus
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
