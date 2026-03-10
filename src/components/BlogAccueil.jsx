import { useState } from "react";

import { Link } from "react-router-dom";

import { useLanguage } from "../contexts/LanguageContext";

import "../css/BlogAccueil.css";

import blog1 from "../assets/images/ia.png";

import blog2 from "../assets/images/africaines.png";

import blog3 from "../assets/images/finance.jpg";

import blog4 from "../assets/images/agricultur.jpg";

import blog5 from "../assets/images/automatisatio.png";

import blog6 from "../assets/images/automatisation.png";






export default function BlogAccueil() {

  const { t } = useLanguage();

  const [activeCategory, setActiveCategory] = useState(t('blogAccueil.categories')[0]);

  const blogImages = [blog1, blog2, blog3, blog4, blog5, blog6];

  const allBlogs = t('blogAccueil.blogs').map((blog, index) => ({

    ...blog,

    id: index + 1,

    image: blogImages[index],

    link: "#"

  }));



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

        <h1 className="blog-title"

          dangerouslySetInnerHTML={{ __html: t('blogAccueil.title') }}

        />



        {/* === BOUTONS DE CATÉGORIE === */}

        <div className="blog-categories">

          {t('blogAccueil.categories').map((cat) => (

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

                {t('blogAccueil.readMore')}

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

