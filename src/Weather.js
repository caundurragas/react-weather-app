import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";

export default function Weather() {
  const [temperatureData, setTemperatureData] = useState({ loaded: false });

  function handleSubmit(response) {
    console.log(response.data);
    setTemperatureData({
      loaded: true,
      Temperature: response.data.main.temp,
      Description: response.data.weather[0].description,
      Humidity: response.data.main.humidity,
      Wind: response.data.wind.speed,
      Feelslike: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
      Icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
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

  if (temperatureData.loaded) {
    return (
      <div>
        {form}
        <WeatherData data={temperatureData} />
      </div>
    );
  } else {
    let city = "London";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3ec7bf82a84873e82215df15af12d134`;
    axios.get(url).then(handleSubmit);

    return "loading";
  }
}
