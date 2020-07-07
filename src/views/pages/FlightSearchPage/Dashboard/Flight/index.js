import React from "react";

function Flight({ details }) {
  const {
    arrivalTime,
    date,
    departureTime,
    flightNo,
    name,
    price,
    diff
  } = details;
  return (
    <div className="item-container">
      <div>{name}</div>
      <div>{departureTime}</div>
      <div>{arrivalTime}</div>
      <div>{diff}</div>
      <div>{price}</div>
      {/* <div>NAME</div>
      <div>22:00</div>
      <div>23:30</div>
      <div>1h 30m</div>
      <div>2300</div> */}
    </div>
  );
}

export default Flight;
