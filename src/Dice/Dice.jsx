import React from 'react';
import './Dice.css'
import d4Image from '../assets/d4.png';
import d6Image from '../assets/d6.png';
import d8Image from '../assets/d8.png';
import d10Image from '../assets/d10.png';
import d12Image from '../assets/d12.png';
import d20Image from '../assets/d20.png';
import d100Image from '../assets/d100.png';

const Dice = ({ sides, result }) => {
  let diceImage;
  switch (sides) {
    case 4:
      diceImage = d4Image;
      break;
    case 6:
      diceImage = d6Image;
      break;
    case 8:
      diceImage = d8Image;
      break;
    case 10:
      diceImage = d10Image;
      break;
    case 12:
      diceImage = d12Image;
      break;
    case 20:
      diceImage = d20Image;
      break;
    case 100:
      diceImage = d100Image;
      break;
    default:
      diceImage = 'unknown.png';
  }

  return (
    <div className="dice_container">
      <img src={diceImage} alt="Dice" />
      <div className="result">{result}</div>
    </div>
  );
};

export default Dice;
