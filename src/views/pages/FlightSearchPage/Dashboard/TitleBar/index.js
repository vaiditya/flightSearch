import React from "react";
import Proptypes from "prop-types";
import onewayPlane from "icons/onewayPlane.png";
import returnPlane from "icons/returnPlane.png";
import { strToDate } from "utils";

/**
 * Componrnt to render result title
 * @param {Object} { payload, isIndirect }
 */
function TitleBar({ payload, isIndirect }) {
  const {
    origin,
    destination,
    totalFlights,
    startDateObj,
    returnDateObj
  } = payload;

  return (
    <div id="title" className="d-flex align-items-center">
      <img src={returnDateObj ? returnPlane : onewayPlane} alt="" />
      <div className="content d-flex align-items-center">
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

TitleBar.propTypes = {
  payload: Proptypes.object,
  isIndirect: Proptypes.bool
};

export default React.memo(TitleBar);
