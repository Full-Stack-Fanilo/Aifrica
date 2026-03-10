import React from "react";
import "../css/Approach.css";
import poIcon from "../assets/images/Aifrica (6).png";
import { useLanguage } from "../contexts/LanguageContext";

export default function Approach() {
  const { t } = useLanguage();
  return (
    <section id="approach" className="approach-new">
      <img src={poIcon} alt={t('navbar.approach', 'Approach')} className="approach-img" />
    </section>
  );
}
