import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Generate from './GenerateScenario/Generate.jsx';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/generate" element={<Generate />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
