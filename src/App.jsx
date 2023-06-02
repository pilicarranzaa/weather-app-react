import './App.css';
import Today from "./Today";
import Sign from "./Sign";
import React from "react";

export default function App() {

  return (
    <div className="body-wrap">
        <Today defaultCity="Cordoba"/>
        <Sign />
    </div>
  );
}