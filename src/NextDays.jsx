import React, {useState} from "react";
import './App.css';
import Forecast from "./Forecast";
import { searchWeather } from "./search";


export default function NextDays(props) {
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {

    let dd = new Date(response.data.dt*1000);
    dd.setDate(dd.getDate()+1);

    setWeatherData({
      ready: true,
      date: dd,
      minTemp: Math.round(response.data.main.temp_min),
      maxTemp: Math.round(response.data.main.temp_max),
      iconURL: response.data.weather[0].icon,
    });
  }

  if (weatherData.ready) {
  return (
    <div className="next-days">
      <div className="item bd">
        <h4 id="day1"><Forecast date={weatherData.date} fst/></h4>
        <h3>
          <span className="temperature" id="min1">
            {weatherData.minTemp}
          </span>
          º /
          <span className="max temperature" id="max1">
            {weatherData.maxTemp}
          </span>
          º
        </h3>
        <div className="mainImg">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.iconURL}@2x.png`}
            alt={weatherData.description}
            className="icon"
            id="icon1"
          />
        </div>
      </div>
      <div className="item bd">
        <h4 id="day2"><Forecast date={weatherData.date} scd/></h4>
        <h3>
          <span className="temperature" id="min2">
            {weatherData.minTemp}
          </span>
          º /
          <span className="max temperature" id="max2">
            {weatherData.maxTemp}
          </span>
          º
        </h3>
        <div className="mainImg">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.iconURL}@2x.png`}
            alt={weatherData.description}
            className="icon"
            id="icon2"
          />
        </div>
      </div>
      <div className="item bd">
        <h4 id="day3"><Forecast date={weatherData.date} thd/></h4>
        <h3>
          <span className="temperature" id="min3">
            {weatherData.minTemp}
          </span>
          º /
          <span className="max temperature" id="max3">
            {weatherData.maxTemp}
          </span>
          º
        </h3>
        <div className="mainImg">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.iconURL}@2x.png`}
            alt={weatherData.description}
            className="icon"
            id="icon3"
          />
        </div>
      </div>
      <div className="item bd">
        <h4 id="day4"><Forecast date={weatherData.date} fth/></h4>
        <h3>
          <span className="temperature" id="min4">
            {weatherData.minTemp}
          </span>
          º /
          <span className="max temperature" id="max4">
            {weatherData.maxTemp}
          </span>
          º
        </h3>
        <div className="mainImg">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.iconURL}@2x.png`}
            alt={weatherData.description}
            className="icon"
            id="icon4"
          />
        </div>
      </div>
      <div className="item bd">
        <h4 id="day5"><Forecast date={weatherData.date} fft/></h4>
        <h3>
          <span className="temperature" id="min5">
            {weatherData.minTemp}
          </span>
          º /
          <span className="max temperature" id="max5">
            {weatherData.maxTemp}
          </span>
          º
        </h3>
        <div className="mainImg">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.iconURL}@2x.png`}
            alt={weatherData.description}
            className="icon"
            id="icon5"
          />
        </div>
      </div>
    </div>
  );
  } else {
    searchWeather(props.city, handleResponse);
    return "Loading...";
  }  
}
