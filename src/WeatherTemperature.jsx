import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const[unit, setUnit] = useState("celsius");

    function showFarenheit(event) {
        event.preventDefault();
        setUnit("farenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

function farenheit() {
    return (props.celsius*9)/5+32;
}

if (unit === "celsius"){
    return (
        <div className="d-flex align-items-start">
          <h1 className="temperature" id="currentTemp">
          {Math.round(props.celsius)}
          </h1>
          <div className="units">
            <a href="/" className="celsius">
              ºC
            </a>
            <span />/
            <a href="/" onClick={showFarenheit} className="farenheit">
              ºF
            </a>
          </div>
        </div>
    );
} else {
    return (
<div className="d-flex align-items-start">
          <h1 className="temperature" id="currentTemp">
          {Math.round(farenheit())}
          </h1>
          <div className="units">
            <a href="/" onClick={showCelsius} className="celsius">
              ºC
            </a>
            <span />/
            <a href="/" className="farenheit">
              ºF
            </a>
          </div>
        </div>
    );
}
}