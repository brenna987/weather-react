import React from "react";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="row weather">
        <div className="col-2">Wed</div>
        <div className="col-2">Thu</div>
        <div className="col-2">Fri</div>
        <div className="col-2">Sat</div>
        <div className="col-2">Sun</div>
      </div>
      <br />
      <div className="row weather">
        <div className="col-2">
          <img
            src="https://keen-booth-bf2023.netlify.app/src/01d.png"
            alt="icon"
          />
        </div>
        <div className="col-2">
          <img
            src="https://keen-booth-bf2023.netlify.app/src/01d.png"
            alt="icon"
          />
        </div>
        <div className="col-2">
          <img
            src="https://keen-booth-bf2023.netlify.app/src/01d.png"
            alt="icon"
          />
        </div>
        <div className="col-2">
          <img
            src="https://keen-booth-bf2023.netlify.app/src/01d.png"
            alt="icon"
          />
        </div>
        <div className="col-2">
          <img
            src="https://keen-booth-bf2023.netlify.app/src/01d.png"
            alt="icon"
          />
        </div>
      </div>
      <br />
      <div className="row weather">
        <div className="col-2">80°</div>
        <div className="col-2">75°</div>
        <div className="col-2">80°</div>
        <div className="col-2">70°</div>
        <div className="col-2">73°</div>
      </div>
    </div>
  );
}
