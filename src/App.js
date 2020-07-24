import React from "react";

import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="container">
      <div className="outline">
        <Weather defaultCity="Atlanta" />
      </div>
      <p className="footer">
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
