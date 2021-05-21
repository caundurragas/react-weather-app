import React from "react";
import axios from "axios";

export default function Weather() {
  return (
    <div className="row">
      <div className="col-6">
        <h1 id="city">London</h1>
        <ul id="timeDescription">
          <li id="currentTime">Friday 5th of April, 2021</li>

          <li id="description">Sunny</li>
        </ul>
      </div>

      <div className="col-6">
        <div className="clearfix weatherTemperature">
          <img
            src="https://cdn.icon-icons.com/icons2/1621/PNG/512/3741356-sun-sunny-weather_108871.png"
            width="32"
            alt="Partly cloudy"
            id="iconWeather"
            className="float-left weatherForecastIcon"
          />
          <div className="float-left currentWeather">
            <span id="currentTemperature"> 13</span>

            <span className="metrics">ºC</span>
          </div>
        </div>

        <ul id="temperatureInfo">
          <li id="wind">
            Wind <span id="windInfo">23</span>mp
          </li>
          <li id="hum">
            Humidity <span id="humidity">23</span>%
          </li>
          <li id="feelsLike">
            Feels Like <span id="realFeel">23</span>ºC
          </li>
        </ul>
      </div>
    </div>
  );
}
