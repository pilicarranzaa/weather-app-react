import React from "react";
import "./styles.css";

export default function Today() {
  return (
    <div className="today bd">
      <div className="today-data px-3 py-1">
          <h2 id="currentHour">16:17HS</h2>
        <div className="d-flex align-items-start">
          <h1 className="temperature" id="currentTemp">
            8
          </h1>
          <div className="units">
            <a href="\" className="celsius">
              ºC
            </a>
            <span />
            <a href="\" className="farenheit">
              ºF
            </a>
          </div>
        </div>
      </div>
      <div className="mainImg">
        <img
          src="https://openweathermap.org/img/wn/01d@2x.png"
          alt="Clear"
          className="icon"
        />
      </div>
      <div className="info">
        <ul>
          <li>
            Humidity: <span id="humidity">90</span>%
          </li>
          <li>
            Wind: <span id="wind">90</span> km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
