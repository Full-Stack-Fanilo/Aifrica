import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlateformeAifrica from "./pages/PlateformeAifrica";
import AccompagnementIA from "./pages/AccompagnementIA";
import DataIntelligence from "./pages/DataIntelligence";
import IAGenerative from "./pages/IAGenerative";
import IAAgentique from "./pages/IAAgentique";
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
        {/* Ajoute d'autres routes ici */}
      </Routes>
    </>
  );
}

export default App;
