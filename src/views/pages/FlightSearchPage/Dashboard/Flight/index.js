import React from "react";
import calendar from "../../../../../icons/calendar.png";

function Flight({
  details,
  showDetails,
  toggleVisibilty,
  isLast,
  isMergedItem
}) {
  const {
    arrivalTime,
    date,
    departureTime,
    flightNo,
    name,
    price,
    diff,
    origin,
    destination
  } = details;
  return (
    <div
      className={`item-container ${
        showDetails
          ? `hide-bottom ${isLast ? "last-item" : "margin-bottom-none"}`
          : ""
      }
     `}
    >
      <div className="item-wrapper">
        <img src={calendar} alt="" />
      </div>
      <div className="item-wrapper">
        <div>
          <label>{name}</label>
          {!isMergedItem ? (
            <label className="small">{flightNo}</label>
          ) : (
            <>
              {showDetails ? (
                <a
                  className="small link"
                  onClick={() => toggleVisibilty(false)}
                >
                  hide details
                </a>
              ) : (
                <a className="small link" onClick={() => toggleVisibilty(true)}>
                  show details
                </a>
              )}
            </>
          )}
        </div>
      </div>
      <div className="item-wrapper">
        <div>
          <label>{departureTime}</label>
          <label className="small">{origin.split("(")[0]}</label>
        </div>
      </div>
      <div className="item-wrapper">
        <div>
          <label>{arrivalTime}</label>
          <label className="small">{destination.split("(")[0]}</label>
        </div>
      </div>
      <div className="item-wrapper">{arrivalTime}</div>
      <div className="item-wrapper">{diff}</div>
      <div className="item-wrapper">{price}</div>
      <div className="item-wrapper">
        <button className="btn">Book</button>
      </div>
    </div>
  );
}

export default Flight;
