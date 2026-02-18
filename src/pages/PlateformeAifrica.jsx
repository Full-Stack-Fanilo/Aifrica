import React from "react";
import "../css/SolutionIA.css";
import FAQ_PlateformeAifrica from "../components/PlateformeAifrica/FAQ_PlateformeAifrica";
import CallToAction_PlateformeAifrica from "../components/PlateformeAifrica/CallToAction_PlateformeAifrica";
import Header_PlateformeAifrica from "../components/PlateformeAifrica/Header_PlateformeAifrica";
import Solutions_PlateformeAifrica from "../components/PlateformeAifrica/Solutions_PlateformeAifrica";
import Developpement_PlateformeAifrica from "../components/PlateformeAifrica/Developpement_PlateformeAifrica";

export default function PlateformeAifrica() {
  return (
    <div>
      {/* === SECTION 1 : INTRO === */}
      <Header_PlateformeAifrica />

      {/* === SECTION 2 : NOS SOLUTIONS === */}
      <Solutions_PlateformeAifrica />

      {/* === SECTION 3 : COMMENT ÇA MARCHE === */}
      <Developpement_PlateformeAifrica />

      {/* === SECTION 4 : FAQ === */}
      <FAQ_PlateformeAifrica />

      {/* === SECTION 5 : CallToAction === */}
      <CallToAction_PlateformeAifrica />
    </div>
  );
}
