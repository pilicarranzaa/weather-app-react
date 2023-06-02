import React from "react";
import './App.css';

export default function WeatherForecastDay(props) {

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  } 
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  } 

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  
  function date() {
    let date = new Date(props.data.dt * 1000);
    let month = date.getMonth();
    let dateStr = date.getDate();

    if (dateStr <10) {
      dateStr = `0${dateStr}`;
  }

    let months = [`01`,`02`,`03`,`04`,`05`,`06`,`07`,`08`,`09`,`10`,`11`,`12`];

    return dateStr + "/" + months[month];
  }

  return(
      <div className="item bd">
      <h5 id="day1">{day()}</h5>
      <h5 id="day1">{date()}</h5>
      <h3>
        <span className="temperature" id="min1">
        {minTemperature()}
        </span>
        /
        <span className="max temperature" id="max1">
          {maxTemperature()}
        </span>
      </h3>
      <div className="mainImg">
        <img
          src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt={props.data.weather[0].description}
          className="icon"
          id="icon1"
        />
      </div>
    </div>
    );
  }
