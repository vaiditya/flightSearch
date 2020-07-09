import React from "react";
import Flight from "./Flight";
import CombinedFlight from "./CombinedFlight";
import DetailsPreview from "./TitleBar";
import BeatLoader from "react-spinners/BeatLoader";

/**
 * Component for containing results to be rendered
 * @param {Object} props
 */
function DashboardComponent({ oneWay, returnWay, loader }) {
  return (
    <div id="list" className="d-flex justify-content-center">
      {!loader ? (
        <>
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
                {returnWay.filtered.direct && (
                  <div>
                    {returnWay.filtered.direct.map((flight, index) => (
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
        </>
      ) : (
        <div className="loader d-flex align-items-center justify-content-center">
          <BeatLoader />
        </div>
      )}
    </div>
  );
}

export default DashboardComponent;
