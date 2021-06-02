import React from "react";
import "./App.css";
import Weather from "./Weather";
import WeeklyForecast from "./WeeklyForecast";
import "./SearchEngineer.css";
import "./WeeklyForecast.css";
import "./Weather.css";

function App() {
  return (
    <div className="container">
      <div className="weatherApp">
        <Weather defaultCity="London" />
        <WeeklyForecast />
      </div>
      <a href="https://github.com/caundurragas/react-weather-app">
        Open-source
      </a>
    </div>
  );
}

export default App;
