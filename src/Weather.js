import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [loaded, setLoaded] = useState(false);
  const [temperatureData, setTemperatureData] = useState(null);

  function handleSubmit(response) {
    console.log(response.data);
    setTemperatureData({
      Temperature: response.data.main.temp,
      Description: response.data.weather[0].description,
      Humidity: response.data.main.humidity,
      Wind: response.data.wind.speed,
      Feelslike: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
      Icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setLoaded(true);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        className="searchBar"
        type="search"
        placeholder="Search for a city..."
        //onChange={getCity}
      />
      <input className="searchButton" type="submit" value="search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="row">
          <div className="col-6">
            <h1 id="city">London</h1>
            <ul id="timeDescription">
              <li id="currentTime">
                <FormattedDate date={temperatureData.date} />
              </li>

              <li className="text-capitalize" id="description">
                {temperatureData.Description}
              </li>
            </ul>
          </div>

          <div className="col-6">
            <div className="clearfix weatherTemperature">
              <img
                src={temperatureData.Icon}
                width="32"
                alt={temperatureData.Description}
                id="iconWeather"
                className="float-left weatherForecastIcon"
              />
              <div className="float-left currentWeather">
                <span id="currentTemperature">
                  {Math.round(temperatureData.Temperature)}
                </span>

                <span className="metrics">ºC</span>
              </div>
            </div>

            <ul id="temperatureInfo">
              <li id="wind">
                Wind: <span id="windInfo">{temperatureData.Wind}</span>km/h
              </li>
              <li id="hum">
                Humidity: <span id="humidity">{temperatureData.Humidity}</span>%
              </li>
              <li id="feelsLike">
                Feels Like:{" "}
                <span id="realFeel">
                  {Math.round(temperatureData.Feelslike)}
                </span>
                ºC
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "London";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3ec7bf82a84873e82215df15af12d134`;
    axios.get(url).then(handleSubmit);

    return "loading";
  }
}
