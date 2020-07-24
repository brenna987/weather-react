import React, { useState } from "react";
import ForecastInfo from "./ForecastInfo";
import axios from "axios";

import "./App.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast row">
        <ForecastInfo data={forecast.list[7]} />
        <ForecastInfo data={forecast.list[15]} />
        <ForecastInfo data={forecast.list[23]} />
        <ForecastInfo data={forecast.list[31]} />
        <ForecastInfo data={forecast.list[39]} />
      </div>
    );
  } else {
    let apiKey = "4b72c972f7597913fe5a676591dd7b39";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
