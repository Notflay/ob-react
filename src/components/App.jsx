import React, { useState } from "react";
import Tasklist from "./lists/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./lists/Counter";
import Settings from "./settings/Settings";

/**
 * Funcion Anónima para crear un Componente principal
 * @returns {React.Component} Componente principal de nuestra aplicación
 */
const App = () => {
  const config = JSON.parse(localStorage.getItem("config"));
  const [dark, setDark] = useState(config.theme);

  /**
   * Funcíon para cambiar el estado del dark y así poder cambiar
   * la className
   * @param {*} theme valor de config.theme
   */
  const toggleDark = (theme) => {
    console.log(theme);
    setDark(theme);
  };
  return (
    <div className={`App${dark === "dark" ? " dark" : ""}`}>
      <Tasklist />
      <hr style={{ marginTop: "20", marginBottom: "20" }} />
      <Settings toggleDark={toggleDark} />
      <Counter />
    </div>
  );
};

export default App;
