import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";

// Importamos las hojas de estilos

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/css/index.scss";

// TODO: Si trabajamos con Redux, crear el Store y aplicar el middleware de Redux Saga

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
