import React from "react";
import FormComponent from "./FormComponent";
import { computeResults, rangeFilter } from "./utils";
import RangePicker from "./RangePicker";

/**
 * Component for rendering Search Form
 * @param {Object}
 * data: store for filtering
 * oneWayResult , setOnewayResult : retrieval and updating one way results
 * returnWayResult , setReturnWayResult : retrieval and updating return way results
 * startLoader : Callback for initiating loader
 */
function Sider({
  data,
  setOnewayResult,
  setReturnWayResult,
  oneWayResult,
  returnWayResult,
  startLoader
}) {
  /**
   *
   * @param {Object} fields : form fields
   * @param {String} type : one-way/return
   */
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
    startLoader();
    /*
     * Clearing previous results before updating it with new range filter
     */
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
    /**
     * Get One Way results (direct and indirect flights) based on:
     * origin,
     * destination,
     * dateOfJourney,
     * store
     */
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
      /*
       * Clearing previous results before updating it with new range filter
       */
      setReturnWayResult({
        original: {
          direct: [],
          indirect: []
        },
        filtered: {
          direct: [],
          indirect: []
        }
      });
      /**
       * Get Return Way results (direct and indirect flights) based on:
       * destination,
       * origin,
       * dateOfJourney,
       * store
       *
       * Note: Re-using common function by reversing origin and destination params
       * to reteive results for return way flights
       */
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
  /**
   * Callback for range slider for updating the filtered results
   * @param {Integer} range
   */
  const onRangeChange = range => {
    const oneWayFilteredFlights = rangeFilter(
      range,
      oneWayResult.original,
      oneWayResult.numberOfPassengers
    );
    /**
     * Update One way filtered results
     * */
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
    /**
     * Update Return way filtered results
     * */
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
