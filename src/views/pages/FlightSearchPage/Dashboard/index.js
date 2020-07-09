import React from "react";
import DashboardComponent from "./DashBoardComponent";
import { getGreaterThen30Flights } from "./formatData";
import "./dashboard.scss";
/**
 * Component for rendering results after search params , range filter
 * @param {Object} { oneWayResult, returnWayResult, loader }
 * @returns result listing
 */
function Dashboard({ oneWayResult, returnWayResult, loader }) {
  if (oneWayResult.filtered.indirect) {
    /*
     * Validation for layover time greater then 30 mins for oneway flights
     */
    oneWayResult.filtered.indirect = getGreaterThen30Flights(
      oneWayResult.filtered.indirect
    );
    oneWayResult.totalFlights += oneWayResult.filtered.indirect.length;
  }

  if (returnWayResult.filtered.indirect) {
    /*
     * Validation for layover time greater then 30 mins for return flights
     */
    returnWayResult.filtered.indirect = getGreaterThen30Flights(
      returnWayResult.filtered.indirect
    );
    returnWayResult.totalFlights += returnWayResult.filtered.indirect.length;
  }
  return (
    <DashboardComponent
      oneWay={oneWayResult}
      returnWay={returnWayResult}
      loader={loader}
    />
  );
}

export default Dashboard;
