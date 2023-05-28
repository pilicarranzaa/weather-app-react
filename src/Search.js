import axios from "axios";

  const apiKey ="6354de4535fcb6d2655dc8e4b8d58339";
  const forecastApiKey ="20ec3ca44e2325b0d3oaf8ft91fafbb5";
  
  export function searchWeather(city, callback){
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(callback);
    }
  
  export function searchForecast(city, callback){
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${forecastApiKey}&units=metric`;
      axios.get(apiUrl).then(callback);
  }


