import React from "react";

import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit";
import "./App.css";

import "./App.css";
export default function Heading(props) {
  return (
    <div>
      <div className="row">
        <div className="col-9 heading" id="city-heading">
          {props.data.city}
        </div>

        <div className="col-3" id="time-decoration">
          <FormattedTime time={props.data.date} />
        </div>
      </div>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li id="description">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-8 ">
          <div className="clearfix float-left">
            <WeatherIcon code={props.data.icon} />
          </div>

          <div className="float-left">
            <WeatherUnit celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>
              Humidity:{" "}
              <span className="humidity"> {props.data.humidity}%</span>
            </li>
            <li>
              Wind: <span className="wind">{props.data.wind} km/H</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
