import React from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";

import ActionMovies from "./ActionMovies";
import ComedyMovies from "./ComedyMovies";

import "./Filmes.css";

function Filme() {
  const { filmeId } = useParams();

  return (
    <div className="container">
      <div className="filmes">
        <h1>Sugestões de Filmes de {filmeId} para um Final de Semana SAUDÁVEL</h1>
        <p>
          Ordenados por categorias
        </p>
      </div>

      <div className="filmes_categorias">
        <ul>
          <li>
            <Link to="actionmovies">Ação</Link>
          </li>
          <li>
            <Link to="comedymovies">Comédia</Link>
          </li>
        </ul>
        <Routes>
          <Route path="actionmovies" element={<ActionMovies />} />
          <Route path="comedymovies" element={<ComedyMovies />} />
        </Routes>
      </div>
    </div>
  );
}

export default Filme;
