import React from "react";
export default function WeeklyForecast() {
  return (
    <div className="forecastContainer">
      <h3>Daily</h3>
      <div className="weatherForecast" id="daily-forecast">
        <div className="row">
          <div className="col-2">
            <div className="day">Monday</div>
            <img
              src="https://cdn.icon-icons.com/icons2/1621/PNG/512/3741356-sun-sunny-weather_108871.png"
              alt="weather icon"
              className="weatherForecastIcon"
            />
            <div className="weatherForecastMaxTemperature">Max 24ºC</div>
            <div className="weatherForecastMinTemperature">Min 14ºC</div>
          </div>
          <div className="col-2">
            <div className="day">Tuesday</div>
            <img
              src="https://cdn.icon-icons.com/icons2/1621/PNG/512/3741356-sun-sunny-weather_108871.png"
              alt="weather icon"
              className="weatherForecastIcon"
            />
            <div className="weatherForecastMaxTemperature">Max 24ºC</div>
            <div className="weatherForecastMinTemperature">Min 14ºC</div>
          </div>
          <div className="col-2">
            <div className="day">Wednesday</div>
            <img
              src="https://cdn.icon-icons.com/icons2/1621/PNG/512/3741356-sun-sunny-weather_108871.png"
              alt="weather icon"
              className="weatherForecastIcon"
            />
            <div className="weatherForecastMaxTemperature">Max 24ºC</div>
            <div className="weatherForecastMinTemperature">Min 14ºC</div>
          </div>
          <div className="col-2">
            <div className="day">Thursday</div>
            <img
              src="https://cdn.icon-icons.com/icons2/1621/PNG/512/3741356-sun-sunny-weather_108871.png"
              alt="weather icon"
              className="weatherForecastIcon"
            />
            <div className="weatherForecastMaxTemperature">Max 24ºC</div>
            <div className="weatherForecastMinTemperature">Min 14ºC</div>
          </div>
          <div className="col-2">
            <div className="day">Friday</div>
            <img
              src="https://cdn.icon-icons.com/icons2/1621/PNG/512/3741356-sun-sunny-weather_108871.png"
              alt="weather icon"
              className="weatherForecastIcon"
            />
            <div className="weatherForecastMaxTemperature">Max 24ºC</div>
            <div className="weatherForecastMinTemperature">Min 14ºC</div>
          </div>
        </div>
      </div>
    </div>
  );
}
