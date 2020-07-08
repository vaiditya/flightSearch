import React from "react";
import FormComponent from "./FormComponent";
import { computeResults, rangeFilter } from "./utils";
import RangePicker from "./RangePicker";

function Sider({
  data,
  setOnewayResult,
  setReturnWayResult,
  oneWayResult,
  returnWayResult
}) {
  const getSearchResults = (fields, type) => {
    const {
      origin,
      destination,
      startDate,
      returnDate,
      numberOfPassengers
    } = fields;

    const oneWayResults = computeResults(origin, destination, startDate, data);
    setOnewayResult({
      original: { ...oneWayResults },
      filtered: { ...oneWayResults },
      totalFlights: oneWayResults.totalFlights,
      origin,
      destination,
      date: startDate,
      numberOfPassengers
    });
    if (type === "return") {
      const returnWayResults = computeResults(
        destination,
        origin,
        returnDate,
        data
      );
      setReturnWayResult({
        original: { ...returnWayResults },
        filtered: { ...returnWayResults },
        totalFlights: returnWayResults.totalFlights,
        origin,
        destination,
        date: returnDate,
        numberOfPassengers
      });
    }
  };

  const onRangeChange = range => {
    const oneWayFilteredFlights = rangeFilter(range, oneWayResult.original);
    console.log("here", oneWayFilteredFlights);
    setOnewayResult({
      ...oneWayResult,
      filtered: { ...oneWayFilteredFlights },
      totalFlights: oneWayFilteredFlights.totalFlights
    });
    const returnWayFilteredFlights = rangeFilter(
      range,
      returnWayResult.original
    );
    setReturnWayResult({
      ...returnWayResult,
      filtered: { ...returnWayFilteredFlights },
      totalFlights: returnWayFilteredFlights.totalFlights
    });
  };
  return (
    <div className="sider">
      <FormComponent getSearchResults={getSearchResults} />
      <RangePicker onRangeChange={onRangeChange} />
    </div>
  );
}

export default Sider;
