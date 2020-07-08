import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sider from "./Sider";
import Dashboard from "./Dashboard";
import "./flight.scss";

import { useDispatch, useSelector } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";
import flightOperations from "../../../store/operations";

function FlightSearchPage() {
  const [oneWayResult, setOnewayResult] = useState({
    original: {
      direct: [],
      indirect: []
    },
    filtered: {
      direct: [],
      indirect: []
    },
    origin: "",
    destination: "",
    date: "",
    totalFlights: 0,
    numberOfPassengers: 1
  });
  const [returnWayResult, setReturnWayResult] = useState({
    original: {
      direct: [],
      indirect: []
    },
    filtered: {
      direct: [],
      indirect: []
    },
    origin: "",
    destination: "",
    date: "",
    totalFlights: 0,
    numberOfPassengers: 1
  });
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector(state => state.flights);
  console.log("state", state);

  useEffect(() => {
    dispatch(flightOperations.getInitialData());
  }, [dispatch]);

  const startLoader = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };
  const { loading, loaded } = state;
  return (
    <div>
      <Header />
      {loaded && !loading ? (
        <div className="container">
          <>
            <Sider
              data={state.data}
              oneWayResult={oneWayResult}
              returnWayResult={returnWayResult}
              setOnewayResult={setOnewayResult}
              setReturnWayResult={setReturnWayResult}
              startLoader={startLoader}
            />
            <Dashboard
              oneWayResult={oneWayResult}
              returnWayResult={returnWayResult}
              loader={loader}
            />
          </>
        </div>
      ) : (
        <div className="loader">
          <BeatLoader />
        </div>
      )}
    </div>
  );
}

export default FlightSearchPage;
