import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlateformeAifrica from "./pages/PlateformeAifrica";
import AccompagnementIA from "./pages/AccompagnementIA";
import DataIntelligence from "./pages/DataIntelligence";
import IAGenerative from "./pages/IAGenerative";
import IAAgentique from "./pages/IAAgentique";
import Entreprise from "./pages/Entreprise";
import Metier from "./pages/Metier";
import Afrique from "./pages/Afrique";
import ArticleDetail from "./pages/ArticleDetail";
import DiagnosticDataIA from "./pages/DiagnosticDataIA";
import ConsultingIAData from "./pages/ConsultingIAData";
import SolutionIAAvancee from "./pages/SolutionIAAvancee";
import AcculturationIA from "./pages/AcculturationIA";
import Technologie from "./pages/Technologie";
import ChatbotPage from "./pages/ChatbotPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar /> {/* ✅ Navbar toujours visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plateforme-aifrica" element={<PlateformeAifrica />} />
        <Route path="/accompagnement-IA" element={<AccompagnementIA />} />
        <Route path="/dataIntelligence" element={<DataIntelligence />} />
        <Route path="/IA-Générative" element={<IAGenerative />} />
        <Route path="/IA-Agentique" element={<IAAgentique />} />
        <Route path="/entreprise" element={<Entreprise />} />
        <Route path="/metier" element={<Metier />} />
        <Route path="/afrique" element={<Afrique />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/diagnosticDataIA" element={<DiagnosticDataIA />} />
        <Route path="/consultingIaData" element={<ConsultingIAData />} />
        <Route path="/solutionIASurMesure" element={<SolutionIAAvancee />} />
        <Route path="/acculturationIA" element={<AcculturationIA />} />
        <Route path="/technologie" element={<Technologie />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        {/* Ajoute d'autres routes ici */}
      </Routes>
    </>
  );
}

export default App;
