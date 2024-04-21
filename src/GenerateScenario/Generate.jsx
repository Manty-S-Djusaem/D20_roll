import React, { useState, useEffect } from 'react';
import './Generate.css';
import * as DarkFantasy from '../Genres/DarkFantasy.jsx';
import * as PostApocalypse from '../Genres/PostApocalypse.jsx';
import * as Comedy from '../Genres/Comedy.jsx';
import * as Fantasy from '../Genres/Fantasy.jsx';
import { Link } from 'react-router-dom';

// Функция для случайного выбора элемента из массива
const getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const genres = {
  'Дарк Фентези': DarkFantasy,
  'Пост Апокалипсис': PostApocalypse,
  'Комедия': Comedy,
  'Фэнтези': Fantasy,
};

const ScenarioGenerator = () => {
  const [selectedGenre, setSelectedGenre] = useState('Дарк Фентези');
  const [scenario, setScenario] = useState(null);

  // Загрузка сохраненного сценария при инициализации
  useEffect(() => {
    const savedScenario = localStorage.getItem('savedScenario');
    if (savedScenario) {
      setScenario(savedScenario);
    }
  }, []);

  const generateScenario = () => {
    const genre = genres[selectedGenre];

    if (genre) {
      const location = getRandomElement(genre.locations);
      const objective = getRandomElement(genre.objectives);
      const npc = getRandomElement(genre.npcs);
      const enemy = getRandomElement(genre.enemies);
      const event = getRandomElement(genre.events);
      const reward = getRandomElement(genre.rewards);

      const newScenario = `
        Жанр: ${selectedGenre}
        Место действия: ${location}
        Цель: ${objective}
        NPC: ${npc}
        Противник: ${enemy}
        Событие: ${event}
        Награда: ${reward}
      `;

      setScenario(newScenario);

      // Сохранение сценария в локальное хранилище
      localStorage.setItem('savedScenario', newScenario);
    } else {
      console.error(`Неизвестный жанр: ${selectedGenre}`);
    }
  };

  return (
    <div className="generate_container">
      <button onClick={() => setSelectedGenre('Дарк Фентези')} className='ganre_buttons' style={{ backgroundColor: '#7c0200', color: 'black' }}>Дарк Фентези</button>
      <button onClick={() => setSelectedGenre('Пост Апокалипсис')} className='ganre_buttons' style={{ backgroundColor: '#efdb9a', color: 'black' }}>Пост Апокалипсис</button>
      <button onClick={() => setSelectedGenre('Комедия')} className='ganre_buttons' style={{ backgroundColor: '#ffe37a', color: 'black' }}>Комедия</button>
      <button onClick={() => setSelectedGenre('Фэнтези')} className='ganre_buttons' style={{ backgroundColor: '#6fc276', color: 'black' }}> Фэнтези</button >
      <button onClick={generateScenario} className="generate">Генерировать сценарий</button>

      {
        scenario && (
          <pre style={{ color: '#c2d6f6', fontSize: '18px' }}>{scenario}</pre>
        )
      }

      <Link to="/">
        <button style={{ backgroundColor: '#efdb9a', color: 'black' }}>Вернуться к Кубу</button>
      </Link>
    </div >
  );
};

export default ScenarioGenerator;
