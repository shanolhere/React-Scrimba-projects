import "./styles.css";
import data from "./data.js";
import { useState } from "react";

export default function App() {
  const [squares, setSquares] = useState(data);

  function handleToggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const dataMap = squares.map((item) => {
    return (
      <div
        key={item.id}
        className="card"
        style={
          item.on
            ? { backgroundColor: "#0ab4f7" }
            : { backgroundColor: "white" }
        }
        onClick={() => handleToggle(item.id)}
      ></div>
    );
  });

  return (
    <div className="App">
      <nav>
        <h1>ReactPiano</h1>
        <h3>React-project4</h3>
      </nav>
      <main>{dataMap}</main>
    </div>
  );
}
