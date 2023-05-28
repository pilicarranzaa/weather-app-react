import './App.css';
import Today from "./Today";
import NextDays from "./NextDays";
import Searcher from "./Searcher";
import Sign from "./Sign";
import React, {useState} from "react";

export default function App() {

  const [city, setCity] = useState("Cordoba");

  return (
    <div className="body-wrap">
        <div className="container body defaultBg py-3">
          <Today  city={city} ready={false}/>
          <NextDays city={city}/>
          <Searcher setCity={setCity}/>
        </div>
        <Sign />
    </div>
  );
}