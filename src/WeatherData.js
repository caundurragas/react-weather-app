import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
            <div className="float-left weatherForecastIcon">
              <WeatherIcon code={props.data.Icon} size={62} />
            </div>
            <div className="float-left currentWeather">
              <WeatherTemperature celsius={props.data.Temperature} />
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
