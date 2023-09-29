import React from "react";
import "./ActionSeries.css";

import series1 from "./images/series_1.jpg";
import series2 from "./images/series_2.jpg";
import series3 from "./images/series_3.webp";
import series4 from "./images/series_4.jpg";
import series5 from "./images/series_5.jpg";
import series6 from "./images/series_6.jpg";

function ActionMovies() {
  return (
    <div className="series_acao">
      <div className="series_acao_wrapper">

        <div className="series_box">
          <a href="https://www.netflix.com/browse/genre/10673?bc=83&jbv=80994082" target="_blank" rel="noreferrer">
            <img src={series1} alt="" />
          </a>
        </div>
        <div className="series_box">
          <a href="https://www.netflix.com/browse/genre/10673?bc=83&jbv=80189685" target="_blank" rel="noreferrer">
            <img src={series2} alt="" />
          </a>
        </div>
        <div className="series_box">
          <a href="https://www.netflix.com/browse/genre/10673?bc=83&jbv=70177057" target="_blank" rel="noreferrer">
            <img src={series3} alt="" />
          </a>
        </div>
        <div className="series_box">
          <a href="https://www.netflix.com/browse/genre/10673?bc=83&jbv=80200575" target="_blank" rel="noreferrer">
            <img src={series4} alt="" />
          </a>
        </div>
        <div className="series_box">
          <a href="https://www.netflix.com/browse/genre/10673?bc=83&jbv=81149450" target="_blank" rel="noreferrer">
            <img src={series5} alt="" />
          </a>
        </div>
        <div className="series_box">
          <a href="https://www.netflix.com/browse/genre/10673?bc=83&jbv=80074249">
            <img src={series6} alt="" />
          </a>
        </div>

      </div>
    </div>
  );
}

export default ActionMovies;
