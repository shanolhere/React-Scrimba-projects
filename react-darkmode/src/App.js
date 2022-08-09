import "./styles.css";
import Navbar from "./components/navbar";
import Main from "./components/main";

import React, { useState } from "react";
export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  function handleToggle() {
    setDarkMode(!darkMode);
  }

  return (
    <div className="App">
      <Navbar darkMode={darkMode} handleToggle={handleToggle} />

      <Main darkMode={darkMode} />
    </div>
  );
}
