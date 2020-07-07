import React from "react";
import { useSelector } from "react-redux";
import DashboardComponent from "./DashBoardComponent";
import { getGreaterThen30Flights } from "./formatData";
import "./list.scss";

function Dashboard({ oneWayResult, returnWayResult }) {
  if (oneWayResult.indirect) {
    oneWayResult.indirect = getGreaterThen30Flights(oneWayResult.indirect);
    oneWayResult.totalFlights += oneWayResult.indirect.length;
  }
  return (
    <DashboardComponent oneWay={oneWayResult} returnWay={returnWayResult} />
  );
}

export default Dashboard;
