import React, { useState } from "react";
import axios from "axios";
import WeeklyForecastDay from "./WeeklyForecastDay";

export default function WeeklyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="forecastContainer">
        <h3>Daily</h3>
        <div className="weatherForecast" id="daily-forecast">
          <div className="row">
            <div className="col">
              <WeeklyForecastDay data={forecast[0]} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "3ec7bf82a84873e82215df15af12d134";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleResponse);
    return null;
  }
}
