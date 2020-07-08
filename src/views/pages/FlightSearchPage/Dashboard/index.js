import React from "react";
import { useSelector } from "react-redux";
import DashboardComponent from "./DashBoardComponent";
import { getGreaterThen30Flights } from "./formatData";
import "./list.scss";

function Dashboard({ oneWayResult, returnWayResult, loader }) {
  console.log("========", oneWayResult);
  if (oneWayResult.filtered.indirect) {
    oneWayResult.filtered.indirect = getGreaterThen30Flights(
      oneWayResult.filtered.indirect
    );
    oneWayResult.totalFlights += oneWayResult.filtered.indirect.length;
  }
  if (returnWayResult.filtered.indirect) {
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
