import React from "react";
import Weather from "./Weather";
import WeeklyForecast from "./WeeklyForecast";
import SearchEngineer from "./SearchEngineer";
import "./index.css";
import "./SearchForm.css";
import "./Weather.css";
import "./WeeklyForecast.css";

function App() {
  return (
    <div class="container">
      <div class="weatherApp">
        <SearchEngineer />
        <Weather />
        <WeeklyForecast />
      </div>
    </div>
  );
}

export default App;
