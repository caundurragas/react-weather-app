import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeeklyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "3ec7bf82a84873e82215df15af12d134";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metrics`;

  axios.get(url).then(handleResponse);

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
