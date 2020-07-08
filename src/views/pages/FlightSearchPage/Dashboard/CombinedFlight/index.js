import React, { useState } from "react";
import Flight from "../Flight";

function CombinedFlight({ combinedDetails, numberOfPassengers }) {
  const [show, setShow] = useState(false);
  const { first, second, totalTime, layoffTime } = combinedDetails;

  return (
    <div>
      <Flight
        details={{
          name: "Multiple",
          departureTime: first.departureTime,
          arrivalTime: second.arrivalTime,
          price: first.price + second.price,
          diff: totalTime,
          origin: first.origin,
          destination: second.destination
        }}
        numberOfPassengers={numberOfPassengers}
        showDetails={show}
        toggleVisibilty={setShow}
        isMergedItem={true}
      />

      {show && (
        <>
          <Flight details={first} showDetails={show} />
          <div className="layover-wrapper">
            <label>Layover time {layoffTime}</label>
          </div>
          <Flight details={second} showDetails={show} isLast={true} />
        </>
      )}
    </div>
  );
}

export default CombinedFlight;
