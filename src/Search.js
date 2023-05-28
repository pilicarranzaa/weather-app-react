import axios from "axios";

  const apiKey ="6354de4535fcb6d2655dc8e4b8d58339";
  
  export function searchWeather(city, callback){
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(callback);
    }
  
  export function searchForecast(city, callback){
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(callback);
  }


