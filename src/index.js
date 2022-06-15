import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChapterFull from './components/ChapterFull/ChapterFull';
import Home from './components/home/Home';
import "./index.css";




localStorage.setItem('POS', 0);
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="view" element={<ChapterFull />}>
          <Route path=":view" element={<ChapterFull />} />
        </Route>
        <Route
          path='*'
          element={
            <main style={{padding: "1rem", fontSize: "2em", fontWeight: "bold"}}>
              <p> There's Nothing to View Here ... </p>
            </main>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
