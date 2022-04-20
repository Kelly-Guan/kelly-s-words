import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Wordle from './pages/wordle';
import Candycrush from './pages/candycrush';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/wordle" element={<Wordle />} />
      <Route path="/candycrush" element={<Candycrush />} />

    </Routes>
  </BrowserRouter>,
  </React.StrictMode>
);


