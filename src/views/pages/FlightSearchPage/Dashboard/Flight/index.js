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
    <div>
      Flight:<div>{name}</div>
      <div>{departureTime}</div>
      <div>{arrivalTime}</div>
      <div>{diff}</div>
      <div>{price}</div>
    </div>
  );
}

export default Flight;
