import React from "react";
import "./displayweather.css";
const DisplayWeather = (props) => {
  const { data, unit } = props;

  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  return (
    <div className="displayweather">
      <div className="maincard">
        <span className="cardtitle">
          {data.name}, {data.sys.country}
        </span>

        <span className="cardsubtitle">
          As of {new Date().toLocaleDateString()}
        </span>
        <h1>
          {Math.floor(data.main.temp)}
          <sup>o</sup>
          {unit === "metric" ? "C" : unit === "imperial" ? "F" : "K"}
        </h1>

        <span className="weather-main">
          {data.weather[0].main}
          <img src={iconUrl} className="weather-icon" alt="weather icon" />
        </span>
      </div>
    </div>
  );
};
export default DisplayWeather;
