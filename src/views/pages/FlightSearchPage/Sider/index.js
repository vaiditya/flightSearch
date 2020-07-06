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
    console.log(fields, data);

    setOnewayResult(computeResults(origin, destination, startDate, data));
    if (type === "return") {
      setReturnWayResult(computeResults(destination, origin, startDate, data));
    }
  };
  return <FormComponent getSearchResults={getSearchResults} />;
}

export default Sider;
