import React from "react";

export const months = [
  `01`,
  `02`,
  `03`,
  `04`,
  `05`,
  `06`,
  `07`,
  `08`,
  `09`,
  `10`,
  `11`,
  `12`
];

function getNextDay(day) {
    day.setDate(day.getDate()+1);

    const date = day.getDate();
    const month = months[day.getMonth()];
  
    return [date, month];
  };

export default function Forecast({date, fst=false, scd=false, thd=false, fth=false, fft=false}) {
    let dd1 = new Date(date.toUTCString());
    let [d2, m2] = getNextDay(dd1);
    let [d3, m3] = getNextDay(dd1);
    let [d4, m4] = getNextDay(dd1);
    let [d5, m5] = getNextDay(dd1);

    const day = (
        <div>
          <h3>{date.getDate()}/{months[date.getMonth()]}</h3>
        </div>
    )

    const day2 = (
        <div>
          <h3>{d2}/{m2}</h3>
        </div>
    )

    const day3 = (
        <div>
          <h3>{d3}/{m3}</h3>
        </div>
    )
    
    const day4 = (
        <div>
          <h3>{d4}/{m4}</h3>
        </div>
    )

    const day5 = (
        <div>
         <h3>{d5}/{m5}</h3>
        </div>
    )

    return fst ? day : false || scd ? day2  : false || thd ? day3 : false || fth ? day4 : false || fft ? day5 : null;
}