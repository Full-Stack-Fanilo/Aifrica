import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar /> {/* ✅ Navbar toujours visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Ajoute d'autres routes ici */}
      </Routes>
    </>
  );
}

export default App;
