import React from "react";
import "./ComedyMovies.css";

import filme1 from "./images/filme_7.jpg";
import filme2 from "./images/filme_8.jpg";
import filme3 from "./images/filme_9.webp";
import filme4 from "./images/filme_10.jpg";
import filme5 from "./images/filme_11.webp";
import filme6 from "./images/filme_12.webp";

function Settings() {
  return (
    <div className="filmes_acao">
      <div className="filmes_acao_wrapper">

        <div className="filmes_box">
          <a href="https://www.netflix.com/browse/genre/6548?bc=34399&jbv=81590652" target="_blank" rel="noreferrer">
            <img src={filme1} alt="" />
          </a>
        </div>
        <div className="filmes_box">
          <a href="https://www.netflix.com/browse/genre/6548?bc=34399&jbv=81212842" target="_blank" rel="noreferrer">
            <img src={filme2} alt="" />
          </a>
        </div>
        <div className="filmes_box">
          <a href="https://www.netflix.com/browse/genre/6548?bc=34399&jbv=70021641" target="_blank" rel="noreferrer">
            <img src={filme3} alt="" />
          </a>
        </div>
        <div className="filmes_box">
          <a href="https://www.netflix.com/browse/genre/6548?bc=34399&jbv=81186234" target="_blank" rel="noreferrer">
            <img src={filme4} alt="" />
          </a>
        </div>
        <div className="filmes_box">
          <a href="https://www.netflix.com/browse/genre/6548?bc=34399&jbv=80031715" target="_blank" rel="noreferrer">
            <img src={filme5} alt="" />
          </a>
        </div>
        <div className="filmes_box">
          <a href="https://www.netflix.com/browse/genre/6548?bc=34399&jbv=70264796" target="_blank" rel="noreferrer">
            <img src={filme6} alt="" />
          </a>
        </div>

      </div>
    </div>
  );
}

export default Settings;
