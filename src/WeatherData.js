import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherData(props) {
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-6">
          <h1 id="city">{props.data.City}</h1>
          <ul id="timeDescription">
            <li id="currentTime">
              <FormattedDate date={props.data.date} />
            </li>

            <li className="text-capitalize" id="description">
              {props.data.Description}
            </li>
          </ul>
        </div>

        <div className="col-6">
          <div className="clearfix weatherTemperature">
            <img
              src={props.data.Icon}
              width="32"
              alt={props.data.Description}
              id="iconWeather"
              className="float-left weatherForecastIcon"
            />
            <div className="float-left currentWeather">
              <span id="currentTemperature">
                {Math.round(props.data.Temperature)}
              </span>

              <span className="metrics">ºC</span>
            </div>
          </div>

          <ul id="temperatureInfo">
            <li id="wind">
              Wind: <span id="windInfo">{props.data.Wind}</span>km/h
            </li>
            <li id="hum">
              Humidity: <span id="humidity">{props.data.Humidity}</span>%
            </li>
            <li id="feelsLike">
              Feels Like:{" "}
              <span id="realFeel">{Math.round(props.data.Feelslike)}</span>
              ºC
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
