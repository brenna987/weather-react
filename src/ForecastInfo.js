import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./App.css";

export default function ForecastInfo(props) {
  function forecastDay() {
    let day = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    let weekDay = days[day.getDay()];
    return weekDay;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
  }
  return (
    <div className="ForecastInfo col-2">
      {forecastDay()}
      <WeatherIcon code={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}
