import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dice from './Dice/Dice.jsx';
import Roll_button from './assets/roll_button2.png';
import Header_img from './assets/header.png';
import './App.css';
import './index.css'
import Generate from './GenerateScenario/Generate.jsx';
import Scenario from './assets/scenario.png'

const App = () => {
  const [diceSides, setDiceSides] = useState(6);
  const [diceResult, setDiceResult] = useState(0);
  const [history, setHistory] = useState([]);
  const [showDice, setShowDice] = useState(false);

  useEffect(() => {
    const savedHistory = localStorage.getItem('diceRollHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const rollDice = () => {
    const result = Math.floor(Math.random() * diceSides) + 1;
    setDiceResult(result);
    const newHistory = [{ result, diceSides }, ...history.slice(0, 9)];
    setHistory(newHistory);
    localStorage.setItem('diceRollHistory', JSON.stringify(newHistory));
    setShowDice(false);
    setTimeout(() => {
      setShowDice(true);
    }, 100);
  };

  return (
    <div className="app">
      <h1 className="header_name">
        <img src={Header_img} alt="Header" />
      </h1>

      <div className={`dice-container ${showDice ? 'show' : ''}`}>
        <Dice sides={diceSides} result={diceResult} />
      </div>

      <div className="controls">
        <button onClick={() => setDiceSides(4)}>d4</button>
        <button onClick={() => setDiceSides(6)}>d6</button>
        <button onClick={() => setDiceSides(8)}>d8</button>
        <button onClick={() => setDiceSides(10)}>d10</button>
        <button onClick={() => setDiceSides(12)}>d12</button>
        <button onClick={() => setDiceSides(20)}>d20</button>
        <button onClick={() => setDiceSides(100)}>d100</button>
      </div>

      <img
        className="roll_image"
        src={Roll_button}
        alt="Roll"
        onClick={rollDice}
      />

      <div className="history">
        <h2>History</h2>
        <ul>
          {history.slice(0, 10).map((item, index) => (
            <li key={index}>
              Dice: d{item.diceSides}, Result: {item.result}
            </li>
          ))}
        </ul>
      </div>

      <div className="link">
        <Link to="/generate"><img src={Scenario}></img></Link>
        <Routes>
          <Route path="/generate" element={<Generate />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;