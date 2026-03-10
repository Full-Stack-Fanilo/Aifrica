import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const Service = () => {
  const { t } = useLanguage();
  return <div>{t('services.title', 'Service')}</div>;
};

export default Service;
