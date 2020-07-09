import React from "react";
import onewayPlane from "icons/onewayPlane.png";
import returnPlane from "icons/returnPlane.png";
import { strToDate } from "utils";

function TitleBar({ payload, isIndirect }) {
  const {
    origin,
    destination,
    totalFlights,
    startDateObj,
    returnDateObj
  } = payload;

  return (
    <div id="title">
      <img src={returnDateObj ? returnPlane : onewayPlane} alt="" />
      <div className="content">
        <div>
          <div>
            <label>
              {!isIndirect
                ? `${origin ? origin : "--"} to ${
                    destination ? destination : "--"
                  }`
                : `${destination} to ${origin}`}
            </label>
          </div>
          <div>
            <label className="small">
              {totalFlights} flights found {"\u00A0"}
              {strToDate(startDateObj || returnDateObj)}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleBar;
