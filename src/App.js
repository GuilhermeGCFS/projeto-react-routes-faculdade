import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Filmes from "./components/Filmes";
import Home from "./components/Home";
import Series from "./components/Series";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <header className="app-header">
          <div className="container">
            <div className="header">
              <h1>Minha <b>Netflix</b> Pessoal</h1>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmes/:filmeId/*" element={<Filmes />} />
          <Route path="/series/:serieId/*" element={<Series />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
