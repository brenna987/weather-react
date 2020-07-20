import React from "react";
import Axios from "axios";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit";
import Forecast from "./Forecast";

export default function Heading(props) {
  return (
    <div>
      <div class="row">
        <div class="col-9 heading" id="city-heading">
          {props.data.city}
        </div>

        <div class="col-3" id="time-decoration">
          <FormattedTime time={props.data.date} />
        </div>
      </div>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li id="description">{props.data.description}</li>
      </ul>
      <div class="row">
        <div class="col-8 ">
          <div class="clearfix float-left">
            <WeatherIcon code={props.data.icon} />
          </div>

          <div className="float-left">
            <WeatherUnit celsius={props.data.temperature} />
          </div>
        </div>
        <div class="col-4">
          <ul>
            <li>
              Humidity: <span id="humidity"> {props.data.humidity}%</span>
            </li>
            <li>
              Wind: <span id="wind">{props.data.wind} km/H</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
