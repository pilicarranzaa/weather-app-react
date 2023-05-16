import React from "react";
import "./styles.css";
import axios from "axios";

export default function City() {
  return (
    <div className="city bd">
      <div >
        <h2 id="city">Córdoba</h2>
        <h3 id="country">
          <strong>ARGENTINA</strong>
        </h3>
        <h5 id="description">Clear</h5>
      </div>
      <div id="current-temp">
        <div>
          <h3 id="fullDate">24/10/22</h3>
        </div>
        <h2>
          <span className="temperature" id="minT">
            5
          </span>
          º /
          <span className="max temperature" id="maxT">
            14
          </span>
          º
        </h2>
      </div>
    </div>
  );
}