import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlateformeAifrica from "./pages/PlateformeAifrica";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar /> {/* ✅ Navbar toujours visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plateforme-aifrica" element={<PlateformeAifrica />} />
        {/* Ajoute d'autres routes ici */}
      </Routes>
    </>
  );
}

export default App;
