import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function showTemperature(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}`
    );
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=3ec7bf82a84873e82215df15af12d134`;
  axios.get(url).then(showTemperature);
  return (
    <div className="titt">
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      <h2>Hello!!</h2>
    </div>
  );
}
