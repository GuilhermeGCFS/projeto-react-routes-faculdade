import React from "react";
import "./ActionMovies.css";

import filme1 from "./images/filme_1.jpg";
import filme2 from "./images/filme_2.jpg";
import filme3 from "./images/filme_3.webp";
import filme4 from "./images/filme_4.jpg";
import filme5 from "./images/filme_5.jpg";
import filme6 from "./images/filme_6.webp";

function ActionMovies() {
  return (
    <div className="filmes_acao">
      <div className="filmes_acao_wrapper">

        <div className="filmes_box">
          <a href="https://www.netflix.com/browse/genre/1365?bc=34399&jbv=81058338" target="_blank" rel="noreferrer">
            <img src={filme1} alt="" />
          </a>
        </div>
        <div className="filmes_box">
          <a href="https://www.netflix.com/browse/genre/1365?bc=34399&jbv=81698992" target="_blank" rel="noreferrer">
            <img src={filme2} alt="" />
          </a>
        </div>
        <div className="filmes_box">
          <a href="https://www.netflix.com/browse/genre/1365?bc=34399&jbv=81504462" target="_blank" rel="noreferrer">
            <img src={filme3} alt="" />
          </a>
        </div>
        <div className="filmes_box">
          <a href="https://www.netflix.com/browse/genre/1365?bc=34399&jbv=81416533" target="_blank" rel="noreferrer">
            <img src={filme4} alt="" />
          </a>
        </div>
        <div className="filmes_box">
          <a href="https://www.netflix.com/browse/genre/1365?bc=34399&jbv=81098494" target="_blank" rel="noreferrer">
            <img src={filme5} alt="" />
          </a>
        </div>
        <div className="filmes_box">
          <a href="https://www.netflix.com/browse/genre/1365?bc=34399&jbv=80199905" target="_blank" rel="noreferrer">
            <img src={filme6} alt="" />
          </a>
        </div>

      </div>
    </div>
  );
}

export default ActionMovies;
