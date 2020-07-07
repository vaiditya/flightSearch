import React from "react";
import FormComponent from "./FormComponent";
import { useDispatch, useSelector } from "react-redux";
import computeResults from "./computeResults";

function Sider({
  data,
  oneWayResult,
  setOnewayResult,
  returnWayResult,
  setReturnWayResult
}) {
  const getSearchResults = (fields, type) => {
    const {
      origin,
      destination,
      startDate,
      returnDate
      // numberOfPassengers
    } = fields;

    const oneWayResults = computeResults(origin, destination, startDate, data);
    setOnewayResult({
      ...oneWayResults,
      origin,
      destination,
      date: startDate
    });
    if (type === "return") {
      const returnWayResults = computeResults(
        destination,
        origin,
        returnDate,
        data
      );
      setReturnWayResult({
        ...returnWayResults,
        origin,
        destination,
        date: returnDate
      });
    }
  };
  return <FormComponent getSearchResults={getSearchResults} />;
}

export default Sider;
