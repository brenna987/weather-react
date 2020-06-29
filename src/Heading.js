import React from "react";

export default function Heading() {
  return (
    <div>
      <div class="row">
        <div class="col-8 heading" id="city-heading">
          Phoenix
        </div>
        <div class="col-1">
          <button id="location-button">
            <i class="fas fa-location-arrow" />
          </button>
        </div>
        <div class="col-3" id="time-decoration">
          10:21
        </div>
      </div>
      <ul>
        <li id="day">Monday</li>
        <li id="description">Sunny</li>
      </ul>
      <div class="row">
        <div class="col-8 ">
          <div class="clearfix float-left">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              id="icon"
            />
          </div>
          <span id="temperature">70</span>

          <span id="units">
            <a href="/" id="fahrenheit">
              {" "}
              ° F
            </a>{" "}
            |
            <a href="/" id="celsius" class="active">
              {" "}
              °C
            </a>
          </span>
        </div>
        <div class="col-4">
          <ul>
            <li>
              Humidity: <span id="humidity">6%</span>
            </li>
            <li>
              Wind: <span id="wind">5 km/H</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
