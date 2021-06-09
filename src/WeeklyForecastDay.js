import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeeklyForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  function maxTemperature() {
    let maxTemp = Math.round(props.data.temp.max);
    return maxTemp;
  }
  function minTemperature() {
    let minTemp = Math.round(props.data.temp.min);
    return minTemp;
  }

  return (
    <div>
      <div className="day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={40} />
      <div className="weatherForecastMaxTemperature">
        Max {maxTemperature()}ºC
      </div>
      <div className="weatherForecastMinTemperature">
        Min {minTemperature()}ºC
      </div>
    </div>
  );
}
