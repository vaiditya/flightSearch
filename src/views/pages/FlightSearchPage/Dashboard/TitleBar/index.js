import React from "react";
import calendar from "../../../../../icons/calendar.png";

function TitleBar({ payload }) {
  const { origin, destination, date, totalFlights } = payload;
  return (
    <div id="title">
      <img src={calendar} alt="" />
      <div className="content">
        <div>
          <div>
            <label>
              {origin} to {destination}
            </label>
          </div>
          <div>
            <label className="small">
              {totalFlights} flights found {date}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleBar;
