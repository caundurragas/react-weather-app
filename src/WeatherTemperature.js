import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="currentTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>

        <span className="metrics">
          Cº |{" "}
          <a href="/" onClick={showFahrenheit}>
            {" "}
            Fº
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="currentTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>

        <span className="metrics">
          <a href="/" onClick={showCelsius}>
            Cº
          </a>
          | Fº
        </span>
      </div>
    );
  }
}