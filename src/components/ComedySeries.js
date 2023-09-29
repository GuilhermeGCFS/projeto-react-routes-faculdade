import React from "react";
import "./ComedyMovies.css";

import series1 from "./images/series_7.jpg";
import series2 from "./images/series_8.jpg";
import series3 from "./images/series_9.jpg";
import series4 from "./images/series_10.webp";
import series5 from "./images/series_11.jpg";
import series6 from "./images/series_12.webp";

function Settings() {
  return (
    <div className="series_acao">
      <div className="series_acao_wrapper">

        <div className="series_box">
          <a href="https://www.netflix.com/browse/genre/10375?bc=83&jbv=80197526" target="_blank" rel="noreferrer">
            <img src={series1} alt="" />
          </a>
        </div>
        <div className="series_box">
          <a href="https://www.netflix.com/browse/genre/10375?bc=83&jbv=80095697" target="_blank" rel="noreferrer">
            <img src={series2} alt="" />
          </a>
        </div>
        <div className="series_box">
          <a href="https://www.netflix.com/browse/genre/10375?bc=83&jbv=81457722" target="_blank" rel="noreferrer">
            <img src={series3} alt="" />
          </a>
        </div>
        <div className="series_box">
          <a href="https://www.netflix.com/browse/genre/10375?bc=83&jbv=70281562" target="_blank" rel="noreferrer">
            <img src={series4} alt="" />
          </a>
        </div>
        <div className="series_box">
          <a href="https://www.netflix.com/browse/genre/10375?bc=83&jbv=81231974" target="_blank" rel="noreferrer">
            <img src={series5} alt="" />
          </a>
        </div>
        <div className="series_box">
          <a href="https://www.netflix.com/browse/genre/10375?bc=83&jbv=70195800" target="_blank" rel="noreferrer">
            <img src={series6} alt="" />
          </a>
        </div>

      </div>
    </div>
  );
}

export default Settings;
