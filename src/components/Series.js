import React from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";

import ActionSeries from "./ActionSeries";
import ComedySeries from "./ComedySeries";

import "./Series.css";

function Series() {
  const { serieId } = useParams();

  return (
    <div className="container">

      <div className="series">
        <h1>Sugestões de Séries de {serieId} para o Final de Semana Trevoso</h1>
        <p>
          Ordenados por categorias
        </p>
      </div>

      <div className="series_categorias">
        <ul>
          <li>
            <Link to="actionseries">Ação</Link>
          </li>
          <li>
            <Link to="comedyseries">Comédia</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="actionseries" element={<ActionSeries />} />
        <Route path="comedyseries" element={<ComedySeries />} />
      </Routes>
    </div>
  );
}

export default Series;
