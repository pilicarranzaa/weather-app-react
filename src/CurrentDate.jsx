import React from "react";

export const days = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`
];
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

export default function CurrentDate({ date, showOnlyHour = false }) {
      let day = days[date.getDay()];
      let month = months[date.getMonth()];
      let dateStr = date.getDate();
      let year = date.getFullYear().toString().slice(-2);
      let hours = date.getHours();
      let minutes = date.getMinutes();

      if (dateStr <10) {
        dateStr = `0${dateStr}`;
    }

      if (hours <10) {
          hours = `0${hours}`;
      }
     
      if (minutes <10) {
          minutes = `0${minutes}`;
      }

      const hour = (
        <div>{hours}:{minutes} hs</div>
      )

      const dd = (
        <div>
          <h4>{day}</h4>
          <h3>{dateStr}/{month}/{year}</h3>
        </div>
      )
   

    return showOnlyHour ? hour : dd;
}