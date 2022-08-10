import "./styles.css";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import Die from "./die";
import { nanoid } from "nanoid";

export default function App() {
  function generateDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    };
  }

  const dieMap = () => {
    const newArr = [];
    for (let i = 0; i < 10; i++) {
      newArr.push(generateDie());
    }
    return newArr;
  };
  //console.log(dieMap());

  const [dice, setDice] = useState(dieMap());
  const [tenzies, setTenzies] = useState(false);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstVal = dice[0].value;
    const sameValues = dice.every((die) => die.value === firstVal);
    if (allHeld && sameValues) {
      setTenzies(true);
    }
  }, [dice]);

  const handleDice = (id) => {
    setDice((prevDice) =>
      prevDice.map((item) => {
        return id === item.id ? { ...item, isHeld: !item.isHeld } : item;
      })
    );

    //console.log(id);
  };

  const diceElementMap = dice.map((item) => (
    <Die
      key={item.id}
      value={item.value}
      isHeld={item.isHeld}
      handleDice={() => handleDice(item.id)}
    />
  ));
  const rollDice = () => {
    if (!tenzies) {
      setDice((prevDice) =>
        prevDice.map((item) => {
          return item.isHeld ? item : generateDie();
        })
      );
      setAttempts(attempts + 1);
    } else {
      setTenzies(false);
      setAttempts(0);
      setDice(dieMap());
    }
  };

  return (
    <div className="App">
      {tenzies && <Confetti />}
      <nav>
        <h1>ReactTenzies</h1>
        <h3>React-project6</h3>
      </nav>
      <h1>Tenzies</h1>
      <h3>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </h3>
      {tenzies ? (
        <p>Total attempts : {attempts}</p>
      ) : (
        <p>Attempts taken: {attempts}</p>
      )}

      <main>{diceElementMap}</main>
      <button onClick={rollDice}>{tenzies ? "New Game" : "RollDice"}</button>
    </div>
  );
}
