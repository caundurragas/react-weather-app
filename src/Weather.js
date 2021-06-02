import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";

export default function Weather(props) {
  const [temperatureData, setTemperatureData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function getWeatherInfo(response) {
    console.log(response.data);
    setTemperatureData({
      loaded: true,

      Temperature: response.data.main.temp,
      Description: response.data.weather[0].description,
      Humidity: response.data.main.humidity,
      Wind: response.data.wind.speed,
      Feelslike: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
      City: response.data.name,
      Icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3ec7bf82a84873e82215df15af12d134`;
    axios.get(url).then(getWeatherInfo);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        className="searchBar"
        type="search"
        placeholder="Search for a city..."
        autofocus="on"
        onChange={getCity}
      />
      <input className="searchButton" type="submit" value="search" />
    </form>
  );

  if (temperatureData.loaded) {
    return (
      <div>
        {form}
        <WeatherData data={temperatureData} cityInfo={city} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
