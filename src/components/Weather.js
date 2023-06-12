import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";
const Weather = () => {
  const APIKEY = "e0b69f8b2229e4d516d67f9b3d817079";
  const [form, setForm] = useState({
    city: "",
    country: "",
    unit: "metric",
  });

  const [unit, setUnit] = useState("");

  const [weather, setWeather] = useState([]);

  const weatherData = async (e) => {
    e.preventDefault();
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&&units=${form.unit}&appid=${APIKEY}`
    )
      .then((res) => res.json())
      .then((data) => data);

    setWeather({
      data: data,
    });
    setUnit(form.unit);
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    if (name === "country") {
      setForm({ ...form, country: value });
    }
    if (name === "unit") {
      setForm({ ...form, unit: value });
    }
  };
  return (
    <div className="weather">
      <span className="title">Weather App</span>
      <br />
      <form>
        <input
          type="text"
          name="city"
          placeholder="city"
          required
          onChange={(e) => handleChange(e)}></input>
        <input
          type="text"
          name="country"
          placeholder="country"
          required
          onChange={(e) => handleChange(e)}></input>
        <select name="unit" id="unit" onChange={(e) => handleChange(e)}>
          <option value="metric">Celsius</option>
          <option value="imperial">Farenheit</option>
          <option value="standard">Kelvin</option>
        </select>
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Submit
        </button>
      </form>

      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} unit={unit} />
        </div>
      ) : null}
    </div>
  );
};
export default Weather;
