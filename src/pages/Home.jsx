import React, { useState } from "react";
import Service from "./Service";
import Header from "../components/Header";
import Actualite from "../components/Actualite";
import IAGenerative from "../components/IAGenerative";
import IAAgentique from "../components/IAAgentique";
import DataAnalytique from "../components/DataAnalytique";
import Approach from "../components/Approach";
import MaturiteIa from "../components/MaturiteIa";
import BlogAccueil from "../components/BlogAccueil";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
function HomeV3() {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <Actualite />
      </section>
      <section>
        <IAGenerative />
      </section>
      <section>
        <IAAgentique />
      </section>
      <section>
        <DataAnalytique />
      </section>
      <section>
        <Service />
      </section>
      <section>
        <Approach />
      </section>
      <section>
        <MaturiteIa />
      </section>
      <section>
        <BlogAccueil />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
export default HomeV3;
