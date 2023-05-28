import { useState } from 'react';
import './App.css';

export default function Searcher({ setCity }) {
  const [searchedCity, setSearchedCity] = useState("");

  function handleCityChange(event){
    setSearchedCity(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    setCity(searchedCity);
  }

  return (
    <div className="row search-city h-25 my-2 mx-2">
      <div className="col py-2">
        <form onSubmit={handleSubmit} className="bd mt-3 text-center" id="searchCity">
          <row>
            <input
              type="text"
              name="city"
              id="city-input"
              placeholder="Insert city"
              autocomplete="off"
              onChange={handleCityChange}
            />
            <button className="search" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <br />
            <button className="find col mt-1 p-1" id="find">
              Current
            </button>
          </row>
        </form>
      </div>
    </div>
  );
}