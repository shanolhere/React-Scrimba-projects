import React from "react";
import "../styles.css";

export default function Main(props) {
  return (
    <main className={props.darkMode ? "dark" : "light"}>
      <h2>Funfacts about React</h2>
      <ul>
        <li>React is most powerful JS library.</li>
        <li>It is declarative</li>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
        <li>By learning React, you are open to job opportunities.</li>
        <li>I love React.</li>
      </ul>
    </main>
  );
}
