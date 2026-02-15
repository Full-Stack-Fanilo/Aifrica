import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ importer BrowserRouter
import App from "./App"; // on va créer App.jsx pour gérer toutes les routes
import reportWebVitals from "./reportWebVitals";

// créer la racine
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
