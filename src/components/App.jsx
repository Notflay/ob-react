import React from "react";
import Tasklist from "./lists/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./lists/Counter";
import Settings from "./settings/Settings";

/**
 * Funcion Anónima para crear un Componente principal
 * @returns {React.Component} Componente principal de nuestra aplicación
 */
export default function App() {
  return (
    <div>
      <Tasklist />
      <Settings />
      <Counter />
    </div>
  );
}
