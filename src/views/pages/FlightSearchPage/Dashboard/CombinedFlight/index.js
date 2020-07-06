import React, { useState } from "react";
import Flight from "../Flight";

function CombinedFlight({ combinedDetails }) {
  const [show, setShow] = useState(false);
  const { first, second, totalTime, layoffTime } = combinedDetails;

  return (
    <div>
      <button onClick={() => setShow(!show)}>{!show ? "Show" : "Hide"}</button>
      {!show ? (
        <>
          Flight:
          <Flight
            details={{
              name: "Multiple",
              departureTime: first.departureTime,
              arrivalTime: second.arrivalTime,
              price: first.price + second.price,
              diff: totalTime
            }}
          />
        </>
      ) : (
        <>
          <Flight details={first} /> Layoff:{layoffTime}
          <Flight details={second} />
        </>
      )}
    </div>
  );
}

export default CombinedFlight;
