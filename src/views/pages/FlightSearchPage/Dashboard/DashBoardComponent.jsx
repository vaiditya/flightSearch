import React from "react";
import Flight from "./Flight";
import CombinedFlight from "./CombinedFlight";
import DetailsPreview from "./TitleBar";

function DashboardComponent({ oneWay, returnWay }) {
  return (
    <div id="list">
      {/* <Flight /> */}

      <div
        className={`list-view ${
          returnWay.direct.length > 0 || returnWay.indirect.length > 0
            ? "half-width"
            : ""
        }`}
      >
        <DetailsPreview payload={oneWay} />
        <div className="result-list">
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
          {oneWay.indirect && (
            <div>
              {oneWay.indirect.map((flight, index) => (
                <div key={`key-${index}`}>
                  <CombinedFlight combinedDetails={flight} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* ======================== */}
      {(returnWay.direct.length > 0 || returnWay.indirect.length > 0) && (
        <div className="list-view half-width">
          <DetailsPreview payload={returnWay} />
          <div className="result-list">
            {returnWay.direct && (
              <div>
                {returnWay.direct.map((flight, index) => (
                  <div key={`key-${index}`}>
                    <Flight details={flight} />
                  </div>
                ))}
              </div>
            )}
            {returnWay.indirect && (
              <div>
                {returnWay.indirect.map((flight, index) => (
                  <div key={`key-${index}`}>
                    <CombinedFlight combinedDetails={flight} />
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
