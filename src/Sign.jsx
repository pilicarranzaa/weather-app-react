import React from "react";
import './App.css';

export default function Sign() {
  return (
    <div className="code">
      <a
        href="https://github.com/pilicarranzaa/weather-app-react"
        target="_blank"
        rel="noopener noreferrer"
      >
      Open-source code
      </a>
      {' '}by{' '}
      <a
        href="https://www.shecodes.io/graduates/57970-pilar-maria-carranza-astrada"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pilar Carranza
      </a>
      {' '}and{' '}
          <a
            href="https://pca-weather-app-react.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
    </div>
  );
}
