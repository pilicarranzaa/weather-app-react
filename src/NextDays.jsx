import React, {useState, useEffect} from "react";
import './App.css';
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";


export default function NextDays(props) {

  let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
      setLoaded(false); 
      }, [props.coordinates])

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
  
  if (loaded) {
  return (
    <div className="next-days">
      <WeatherForecastDay data={forecast[1]}/>
      <WeatherForecastDay data={forecast[2]}/>
      <WeatherForecastDay data={forecast[3]}/>
      <WeatherForecastDay data={forecast[4]}/>
      <WeatherForecastDay data={forecast[5]}/>
    </div>
  );
  } else {
    const apiKey = "a969311cfcbb4a83dfad2cf7478397f9";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }  
}
