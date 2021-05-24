import axios from "axios";
import React, { useState } from "react";

export default function SearchEngineer() {
  let [city, setCity] = useState("");
  let [data, setData] = useState("");
  let [loaded, setLoaded] = useState(false);

  function showTemperature(response) {
    console.log(response.data);
    //setData(response.data.main.temp);
    setLoaded(true);
    setData({
      Temperature: response.data.main.temp,
      Description: response.data.weather[0].description,
      Humidity: response.data.main.humidity,
      Wind: response.data.wind.speed,
      Icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  //let apiKey = "3ec7bf82a84873e82215df15af12d134";

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3ec7bf82a84873e82215df15af12d134`;
    axios.get(url).then(showTemperature);

    //setData(`it is ${city}`);
  }
  function getCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for a city..."
        onChange={getCity}
      />
      <input type="submit" value="search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature:{Math.round(data.Temperature)}C</li>
          <li>Description: {data.Description}</li>
          <li>Humidity: {data.Humidity}%</li>
          <li>Wind: {Math.round(data.Wind)}km/hr</li>
          <li>
            {" "}
            <img src={data.Icon} alt={data.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
