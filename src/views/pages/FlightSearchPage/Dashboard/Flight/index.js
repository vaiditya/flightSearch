import React from "react";
import calendar from "../../../../../icons/calendar.png";
import rupee from "../../../../../icons/rupee.png";

function Flight({
  details,
  showDetails,
  toggleVisibilty,
  isLast,
  isMergedItem,
  numberOfPassengers
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

  const totalPrice = price * (numberOfPassengers || 1);
  return (
    <div
      className={`item-container ${
        showDetails
          ? `hide-bottom ${isLast ? "last-item" : "margin-bottom-none"}`
          : ""
      } ${name !== "Multiple" && showDetails ? "splitted-item" : ""}
     `}
    >
      <div className="first-container">
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
                  <a
                    className="small link"
                    onClick={() => toggleVisibilty(true)}
                  >
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
      </div>
      <div className="second-container">
        <div className="item-wrapper">
          <div>
            <label className={`${isMergedItem ? "color-green" : ""}`}>
              {diff}
            </label>
            <label className="small">
              {isMergedItem ? "Total Duration" : !showDetails && "Non stop"}
            </label>
          </div>
        </div>
        <div className="item-wrapper">
          <label className="color-red">
            <img src={rupee} alt="Rs." />
            {isMergedItem ? totalPrice : !showDetails && totalPrice}
          </label>
        </div>
        <div className="item-wrapper">
          <button className="btn">Book</button>
        </div>
      </div>
    </div>
  );
}

export default Flight;
