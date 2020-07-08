import React from "react";
import calendar from "../../../../../icons/calendar.png";

function TitleBar({ payload, isIndirect }) {
  const { origin, destination, date, totalFlights } = payload;
  return (
    <div id="title">
      <img src={calendar} alt="" />
      <div className="content">
        <div>
          <div>
            <label>
              {!isIndirect
                ? `${origin} to ${destination}`
                : `${destination} to ${origin}`}
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
