import React from "react";
import "../styles.css";

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : "light"}>
      <h1>ReactFunFacts</h1>

      <h3>React-project7</h3>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.handleToggle}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
