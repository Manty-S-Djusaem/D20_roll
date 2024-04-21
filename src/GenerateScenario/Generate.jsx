import React, { useState } from 'react';

// Списки элементов сценария
const locations = ["Лес", "Замок", "Пещера", "Подземелье", "Деревня", "Река"];
const objectives = ["Найти артефакт", "Спасти кого-то", "Уничтожить монстра", "Изучить таинственное место", "Защитить деревню", "Добыть ресурс"];
const npcs = ["Мудрый волшебник", "Отважный рыцарь", "Торговец", "Местный житель", "Король или королева", "Таинственный странник"];
const enemies = ["Орки", "Гоблины", "Дракон", "Темный волшебник", "Зомби", "Кентавры"];
const events = ["Внезапное нападение", "Найденный сокровищем", "Обвал или землетрясение", "Волшебное заклинание", "Появление таинственного существа", "Разрушение или пожар"];

// Функция для получения случайного элемента из списка
const getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// Компонент генератора сценариев
const ScenarioGenerator = () => {
  const [scenario, setScenario] = useState(null);

  const generateScenario = () => {
    const location = getRandomElement(locations);
    const objective = getRandomElement(objectives);
    const npc = getRandomElement(npcs);
    const enemy = getRandomElement(enemies);
    const event = getRandomElement(events);

    const newScenario = `
      Место действия: ${location}
      Цель: ${objective}
      NPC: ${npc}
      Противник: ${enemy}
      Событие: ${event}
    `;

    setScenario(newScenario);
  };

  return (
    <div>
      <button onClick={generateScenario}>Генерировать сценарий</button>
      {scenario && <pre style={{ color: '#c2d6f6', fontSize: '18px' }}>{scenario}</pre>}
    </div>
  );
};

export default ScenarioGenerator;
