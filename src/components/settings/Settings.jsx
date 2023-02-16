import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const defaultConfig = {
  theme: "dark",
  lang: "es",
};

const Settings = ({ toggleDark }) => {
  const [config, setConfig] = useLocalStorage("config", defaultConfig);

  /**
   * Función para intercambiar ligth <-> dark
   * @param {*} event - Evento de click proveniente de React
   */
  const handleClick = (event) => {
    event.preventDefault();
    setConfig((oldConfig) => ({
      ...oldConfig,
      theme: oldConfig.theme === "ligth" ? "dark" : "ligth",
    }));
    toggleDark(config.theme);
  };

  return (
    <div>
      <h1>APP SETTINGS</h1>
      <p>
        Actual Config:
        {config.theme}
      </p>
      <button className="btn" type="button" onClick={handleClick}>
        Toggle DarkMode
      </button>
    </div>
  );
};

export default Settings;
