import React from "react";
import Proptypes from "prop-types";
import singleJourney from "icons/singleJourney.png";
import multiple from "icons/multiple.png";
import rupee from "icons/rupee.png";

/**
 * Component to render single flight details
 * @param {Object} props
 */
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
      className={`item-container d-flex justify-content-space-between align-items-center 
      ${
        showDetails
          ? `hide-bottom ${isLast ? "last-item" : "margin-bottom-none"}`
          : ""
      } ${name !== "Multiple" && showDetails ? "splitted-item" : ""}
     `}
    >
      <div className="first-container d-flex justify-content-space-around">
        <div className="item-wrapper d-flex justify-content-center align-items-center">
          <img src={isMergedItem ? multiple : singleJourney} alt="" />
        </div>
        <div className="item-wrapper d-flex justify-content-center align-items-center">
          <div>
            <label>{name}</label>
            {!isMergedItem ? (
              <label className="small">{flightNo}</label>
            ) : (
              <>
                {showDetails ? (
                  <label
                    className="small link"
                    onClick={() => toggleVisibilty(false)}
                  >
                    hide details
                  </label>
                ) : (
                  <label
                    className="small link"
                    onClick={() => toggleVisibilty(true)}
                  >
                    show details
                  </label>
                )}
              </>
            )}
          </div>
        </div>
        <div className="item-wrapper d-flex justify-content-center align-items-center">
          <div>
            <label>{departureTime}</label>
            <label className="small">{origin.split("(")[0]}</label>
          </div>
        </div>
        <div className="item-wrapper d-flex justify-content-center align-items-center">
          <div>
            <label>{arrivalTime}</label>
            <label className="small">{destination.split("(")[0]}</label>
          </div>
        </div>
      </div>
      <div className="second-container d-flex justify-content-space-around">
        <div className="item-wrapper d-flex justify-content-center align-items-center">
          <div>
            <label className={`${isMergedItem ? "color-green" : ""}`}>
              {diff}
            </label>
            <label className="small">
              {isMergedItem ? "Total Duration" : !showDetails && "Non stop"}
            </label>
          </div>
        </div>
        <div className="item-wrapper d-flex justify-content-center align-items-center">
          <label className="color-red">
            <img src={rupee} alt="Rs." />
            {isMergedItem ? totalPrice : !showDetails && totalPrice}
          </label>
        </div>
        {(isMergedItem || !showDetails) && (
          <div className="item-wrapper d-flex justify-content-center align-items-center">
            <button className="btn">Book</button>
          </div>
        )}
      </div>
    </div>
  );
}

Flight.propTypes = {
  details: Proptypes.object,
  showDetails: Proptypes.func,
  toggleVisibilty: Proptypes.func,
  isLast: Proptypes.bool,
  isMergedItem: Proptypes.bool,
  numberOfPassengers: Proptypes.number
};

export default React.memo(Flight);
