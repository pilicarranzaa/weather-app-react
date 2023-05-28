import React, {useState} from "react";
import './App.css';
import CurrentDate from "./CurrentDate";
import changeBg from "./changeBg";
import { searchWeather } from "./search";
import WeatherTemperature from "./WeatherTemperature";


export default function Today(props) {
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {

    let mainDescription= response.data.weather[0].main;
    let pod = response.data.weather[0].icon[response.data.weather[0].icon.length - 1];

    setWeatherData({
      ready: true,
      date: new Date(response.data.dt*1000),
      temperature: Math.round(response.data.main.temp),
      minTemp: Math.round(response.data.main.temp_min),
      maxTemp: Math.round(response.data.main.temp_max),
      description: response.data.weather[0].description,
      
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconURL: response.data.weather[0].icon,
      
      city: response.data.name,
      country: response.data.sys.country,
      
    });
    changeBg(mainDescription, pod);
  }

  if (weatherData.ready) {
        return (
      <div className="header">
      <div className="city bd">
        <div >
          <h2 id="city">{weatherData.city}</h2>
          <h3 id="country">
            <strong>{weatherData.country}</strong>
          </h3>
          <h5 id="description">{weatherData.description}</h5>
        </div>
        <div id="current-temp">
          <div>
            <h3 id="fullDate"><CurrentDate date={weatherData.date} /></h3>
          </div>
          <h2>
            <span className="temperature" id="minT">
            {weatherData.minTemp}
            </span>
            º /
            <span className="max temperature" id="maxT">
            {weatherData.maxTemp}
            </span>
            º
          </h2>
        </div>
      </div>
      <div className="today bd">
      <div className="today-data px-3 py-1">
          <h2 id="currentHour"><CurrentDate date={weatherData.date} showOnlyHour /></h2>
          <WeatherTemperature celsius={weatherData.temperature} />
      </div>
      <div className="mainImg">
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.iconURL}@2x.png`}
          alt={weatherData.description}
          className="icon"
        />
      </div>
      <div className="info">
        <ul>
          <li>
            Humidity: <span id="humidity">{weatherData.humidity}</span>%
          </li>
          <li>
            Wind: <span id="wind">{weatherData.wind}</span> km/h
          </li>
        </ul>
      </div>
    </div>
    </div>
    );
    
    
  } else {
    console.log(props.city);
    searchWeather(props.city, handleResponse);
    return "Loading...";
  }  

}