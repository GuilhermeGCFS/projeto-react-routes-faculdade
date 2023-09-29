import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Filmes from "./Filmes";
import Series from "./Series";

import "./Home.css"; // Importe o arquivo CSS

function Home() {
  return (
    <div className="home">
      <h1>Meu Catálogo de Filmes e Séries para o Final de Semana</h1>
      <p>
        Utilize o menu abaixo para selecionar sua categoria e seja feliz!
      </p>

      <div className="home_menus">
        <ul>
          <li>
            <Link to="/filmes/2023">Filmes</Link>
          </li>
          <li>
            <Link to="/series/2023">Séries</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/filme/:filmeId/*" element={<Filmes />} />
        <Route path="/series/:serieId/*" element={<Series />} />
      </Routes>
    </div>
  );
}

export default Home;
