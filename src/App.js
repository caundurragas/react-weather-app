import React from "react";
import "./App.css";
import Weather from "./Weather";
import "./SearchEngineer.css";
import "./WeeklyForecast.css";
import "./Weather.css";

function App() {
  return (
    <div className="container">
      <div className="weatherApp">
        <Weather defaultCity="London" />
      </div>
      <a href="https://github.com/caundurragas/react-weather-app">
        Open-source
      </a>
    </div>
  );
}

export default App;
