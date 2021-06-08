import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeeklyForecast() {
  return (
    <div className="forecastContainer">
      <h3>Daily</h3>
      <div className="weatherForecast" id="daily-forecast">
        <div className="row">
          <div className="col">
            <div className="day">Monday</div>
            <WeatherIcon code="01d" size={40} />
            <div className="weatherForecastMaxTemperature">Max 24ºC</div>
            <div className="weatherForecastMinTemperature">Min 14ºC</div>
          </div>

          <div className="col">
            <div className="day">Tuesday</div>
            <WeatherIcon code="01d" size={40} />
            <div className="weatherForecastMaxTemperature">Max 24ºC</div>
            <div className="weatherForecastMinTemperature">Min 14ºC</div>
          </div>

          <div className="col">
            <div className="day">Wednesday</div>
            <WeatherIcon code="01d" size={40} />
            <div className="weatherForecastMaxTemperature">Max 24ºC</div>
            <div className="weatherForecastMinTemperature">Min 14ºC</div>
          </div>

          <div className="col">
            <div className="day">Thursday</div>
            <WeatherIcon code="01d" size={40} />
            <div className="weatherForecastMaxTemperature">Max 24ºC</div>
            <div className="weatherForecastMinTemperature">Min 14ºC</div>
          </div>

          <div className="col">
            <div className="day">Friday</div>
            <WeatherIcon code="01d" size={40} />
            <div className="weatherForecastMaxTemperature">Max 24ºC</div>
            <div className="weatherForecastMinTemperature">Min 14ºC</div>
          </div>
        </div>
      </div>
    </div>
  );
}
