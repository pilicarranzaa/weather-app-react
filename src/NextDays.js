import React from "react";
import "./styles.css";
import axios from "axios";

export default function NextDays() {
  return (
    <div className="next-days">
      <div className="item bd">
        <h4 id="day1">31/10</h4>
        <h3>
          <span className="temperature" id="min1">
            6
          </span>
          º /
          <span className="max temperature" id="max1">
            20
          </span>
          º
        </h3>
        <div className="mainImg">
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="Clear"
            className="icon"
            id="icon1"
          />
        </div>
      </div>
      <div className="item bd">
        <h4 id="day2">01/11</h4>
        <h3>
          <span className="temperature" id="min2">
            -4
          </span>
          º /
          <span className="max temperature" id="max2">
            8
          </span>
          º
        </h3>
        <div className="mainImg">
          <img
            src="https://openweathermap.org/img/wn/50d@2x.png"
            alt="Clear"
            className="icon"
            id="icon2"
          />
        </div>
      </div>
      <div className="item bd">
        <h4 id="day3">02/11</h4>
        <h3>
          <span className="temperature" id="min3">
            8
          </span>
          º /
          <span className="max temperature" id="max3">
            24
          </span>
          º
        </h3>
        <div className="mainImg">
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            alt="Clear"
            className="icon"
            id="icon3"
          />
        </div>
      </div>
      <div className="item bd">
        <h4 id="day4">03/11</h4>
        <h3>
          <span className="temperature" id="min4">
            -11
          </span>
          º /
          <span className="max temperature" id="max4">
            35
          </span>
          º
        </h3>
        <div className="mainImg">
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="Clear"
            className="icon"
            id="icon4"
          />
        </div>
      </div>
      <div className="item bd">
        <h4 id="day5">04/11</h4>
        <h3>
          <span className="temperature" id="min5">
            14
          </span>
          º /
          <span className="max temperature" id="max5">
            24
          </span>
          º
        </h3>
        <div className="mainImg">
          <img
            src="https://openweathermap.org/img/wn/02n@2x.png"
            alt="Clear"
            className="icon"
            id="icon5"
          />
        </div>
      </div>
    </div>
  );
}
