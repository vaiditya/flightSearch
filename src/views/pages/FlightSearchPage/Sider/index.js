import React from "react";
import FormComponent from "./FormComponent";
import { computeResults, rangeFilter } from "./utils";
import RangePicker from "./RangePicker";

function Sider({
  data,
  setOnewayResult,
  setReturnWayResult,
  oneWayResult,
  returnWayResult,
  startLoader
}) {
  const getSearchResults = (fields, type) => {
    const {
      origin,
      destination,
      startDate,
      returnDate,
      numberOfPassengers,
      startDateObj,
      returnDateObj
    } = fields;
    setOnewayResult({
      original: {
        direct: [],
        indirect: []
      },
      filtered: {
        direct: [],
        indirect: []
      }
    });
    startLoader();
    const oneWayResults = computeResults(origin, destination, startDate, data);
    setOnewayResult({
      original: { ...oneWayResults },
      filtered: { ...oneWayResults },
      totalFlights: oneWayResults.totalFlights,
      origin,
      destination,
      date: startDate,
      numberOfPassengers,
      startDateObj
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
        numberOfPassengers,
        returnDateObj
      });
    }
  };

  const onRangeChange = range => {
    const oneWayFilteredFlights = rangeFilter(
      range,
      oneWayResult.original,
      oneWayResult.numberOfPassengers
    );
    setOnewayResult({
      ...oneWayResult,
      filtered: { ...oneWayFilteredFlights },
      totalFlights: oneWayFilteredFlights.totalFlights
    });
    const returnWayFilteredFlights = rangeFilter(
      range,
      returnWayResult.original,
      returnWayResult.numberOfPassengers
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
