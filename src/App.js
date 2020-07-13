import React from "react";

import "./App.css";

import Forecast from "./Forecast";
import Search from "./Search";
import Heading from "./Heading";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="container">
      <div className="outline">
        <Weather defaultCity="Atlanta" />
      </div>
      <p class="footer">
        <a
          href="https://github.com/brenna987/weather-app"
          target="blank"
          className="footerLink"
        >
          Open-Source Coded
        </a>{" "}
        by Brenna G.
      </p>
    </div>
  );
}
