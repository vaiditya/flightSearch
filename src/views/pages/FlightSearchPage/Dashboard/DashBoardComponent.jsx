import React from "react";
import Flight from "./Flight";
import CombinedFlight from "./CombinedFlight";

function DashboardComponent({ oneWay, returnWay }) {
  return (
    <div id="list">
      {/* <Flight /> */}
      {oneWay.direct && (
        <div>
          {oneWay.direct.map((flight, index) => (
            <div key={`key-${index}`}>
              <Flight details={flight} />
            </div>
          ))}
        </div>
      )}
      {oneWay.indirect && (
        <div>
          {oneWay.indirect.map((flight, index) => (
            <div key={`key-${index}`}>
              <CombinedFlight combinedDetails={flight} />
            </div>
          ))}
        </div>
      )}
      ========================
      {returnWay.direct && (
        <div>
          Direct Flights:
          {oneWay.direct.map((flight, index) => (
            <div key={`key-${index}`}>
              <Flight details={flight} />
            </div>
          ))}
        </div>
      )}
      {returnWay.indirect && (
        <div>
          Indirect Flights:
          {oneWay.indirect.map((flight, index) => (
            <div key={`key-${index}`}>
              <CombinedFlight combinedDetails={flight} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DashboardComponent;
