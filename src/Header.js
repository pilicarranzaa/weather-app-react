import React from "react";
import "./styles.css";
import City from "./City";
import Today from "./Today";

export default function Header() {
  return (
    <div className="header">
      <City />
      <Today />
    </div>
  );
}