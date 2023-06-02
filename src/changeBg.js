
export default function changeBg(mainDescription, pod) {

    if((mainDescription === "Thunderstorm" || mainDescription === "Drizzle" || mainDescription === "Rain") && pod === "d"){
      let bg = document.querySelector(".body");
      bg.removeAttribute("class");
      bg.classList.add(`container`, `body`, `py-3`, `dRain`);
    };
  
    if(mainDescription === "Clear" && pod === "d"){
      let bg = document.querySelector(".body");
      bg.removeAttribute("class");
      bg.classList.add(`container`, `body`, `py-3`, `dClear`);
    };
    
    if(mainDescription === "Snow" && pod === "d"){
      let bg = document.querySelector(".body");
      bg.removeAttribute("class");
      bg.classList.add(`container`, `body`, `py-3`, `dSnow`);
    };
  
    if(mainDescription === "Clouds" && pod === "d"){
      let bg = document.querySelector(".body");
      bg.removeAttribute("class");
      bg.classList.add(`container`, `body`, `py-3`, `dCloud`);
    };
  
    if((mainDescription === "Fog" || mainDescription === "Mist" || mainDescription === "Smoke" || mainDescription === "Haze" || mainDescription === "Dust" || mainDescription === "Sand" || mainDescription === "Ash" || mainDescription === "Squall" || mainDescription === "Tornado") && (pod === "d" || pod === "n")){
      let bg = document.querySelector(".body");
      bg.removeAttribute("class");
      bg.classList.add(`container`, `body`, `py-3`, `foggy`);
    };
  
     if((mainDescription === "Thunderstorm" || mainDescription === "Drizzle" || mainDescription === "Rain") && pod === "n"){
      let bg = document.querySelector(".body");
      bg.removeAttribute("class");
      bg.classList.add(`container`, `body`, `py-3`, `nRain`);
    };
  
    if(mainDescription === "Clear" && pod === "n"){
      let bg = document.querySelector(".body");
      bg.removeAttribute("class");
      bg.classList.add(`container`, `body`, `py-3`, `nClear`);
    };
    
    if(mainDescription === "Snow" && pod === "n"){
      let bg = document.querySelector(".body");
      bg.removeAttribute("class");
      bg.classList.add(`container`, `body`, `py-3`, `nSnow`);
    };
  
    if(mainDescription === "Clouds" && pod === "n"){
      let bg = document.querySelector(".body");
      bg.removeAttribute("class");
      bg.classList.add(`container`, `body`, `py-3`, `nCloud`);
    } 
  }
