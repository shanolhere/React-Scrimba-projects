import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [check, setCheck] = useState("true");

  //console.log(check);
  return (
    <div className={check ? "light" : "dark"}>
      <nav>
        <h1>ReactFunFacts</h1>
        <div className="checkContainer">
          <input
            type="checkbox"
            id="darkModeID"
            name="darkmode"
            value={check}
            onChange={(e) => setCheck(!check)}
          />
          <label htmlFor="darkModeID">
            {check ? "light mode" : "dark mode"}
          </label>
        </div>
        <h3>React-project1</h3>
      </nav>

      <main>
        <h2>Funfacts about React</h2>
        <ul>
          <li>React is most powerful JS library.</li>
          <li>It is declarative</li>
          <li>By learning React, you are open to job opportunities.</li>
          <li>I love React.</li>
        </ul>
      </main>
    </div>
  );
}
