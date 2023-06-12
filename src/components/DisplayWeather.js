import React from "react";
import "./displayweather.css";
const DisplayWeather = (props) => {
  const { data, unit } = props;
  const unitDisplay = unit === "metric" ? "C" : unit === "imperial" ? "F" : "K";
  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  return (
    <div className="displayweather">
      <div className="maincard">
        <div className="cardtitle">
          {data.name}, {data.sys.country}
        </div>

        <div className="cardsubtitle">
          As of {new Date().toLocaleDateString()}
        </div>
        <h1>
          {Math.floor(data.main.temp)}
          <sup>o</sup>
          {unitDisplay}
        </h1>

        <div className="weather-main">{data.weather[0].main}</div>
        <img src={iconUrl} className="weather-icon" alt="weather icon" />
        <div className="weather-description">{data.weather[0].description}</div>
      </div>

      <div className="weatherdetails">
        <div className="section1">
          <table>
            <tr>
              <td>
                <h4>High/Low</h4>
              </td>
              <td>
                <span>
                  {Math.floor(data.main.temp_max)} /{" "}
                  {Math.floor(data.main.temp_min)} {unitDisplay}
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
export default DisplayWeather;
