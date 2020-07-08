import React from "react";
import Flight from "./Flight";
import CombinedFlight from "./CombinedFlight";
import DetailsPreview from "./TitleBar";

function DashboardComponent({ oneWay, returnWay }) {
  return (
    <div id="list" className="md-screen">
      {/* <Flight /> */}

      <div
        className={`list-view ${
          returnWay.filtered.direct.length > 0 ||
          returnWay.filtered.indirect.length > 0
            ? "half-width"
            : ""
        }`}
      >
        <DetailsPreview payload={oneWay} isIndirect={false} />
        <div className="result-list">
          {oneWay.filtered.direct && (
            <div>
              {oneWay.filtered.direct.map((flight, index) => (
                <div key={`key-${index}`}>
                  <Flight
                    details={flight}
                    numberOfPassengers={oneWay.numberOfPassengers}
                  />
                </div>
              ))}
            </div>
          )}
          {oneWay.filtered.indirect && (
            <div>
              {oneWay.filtered.indirect.map((flight, index) => (
                <div key={`key-${index}`}>
                  <CombinedFlight
                    combinedDetails={flight}
                    numberOfPassengers={oneWay.numberOfPassengers}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {(returnWay.filtered.direct.length > 0 ||
        returnWay.filtered.indirect.length > 0) && (
        <div className="list-view half-width">
          <DetailsPreview payload={returnWay} isIndirect={true} />
          <div className="result-list">
            {returnWay.direct && (
              <div>
                {returnWay.direct.map((flight, index) => (
                  <div key={`key-${index}`}>
                    <Flight
                      details={flight}
                      numberOfPassengers={returnWay.numberOfPassengers}
                    />
                  </div>
                ))}
              </div>
            )}
            {returnWay.filtered.indirect && (
              <div>
                {returnWay.filtered.indirect.map((flight, index) => (
                  <div key={`key-${index}`}>
                    <CombinedFlight
                      combinedDetails={flight}
                      numberOfPassengers={returnWay.numberOfPassengers}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardComponent;
