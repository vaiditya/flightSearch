import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sider from "./Sider";
import Dashboard from "./Dashboard";
import "./flightPage.scss";

import { useDispatch, useSelector } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";
import flightOperations from "store/operations";

/**
 * Component for page view
 *
 */
function FlightSearchPage() {
  /**
   * Initating state variables
   * keys (One way flights):
   *
   * original : store results based on search parameters
   * rest are search parameters
   */
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

  /**
   * Listen to data stored in redux store
   */
  const state = useSelector(state => state.flights);

  /*
   *   Get initial payload on loading of page
   */
  useEffect(() => {
    dispatch(flightOperations.getInitialData());
  }, [dispatch]);

  /**
   * Loading state while fetching results on search parameters
   */
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
        <div className="loader d-flex justify-content-center align-items-center">
          <BeatLoader />
        </div>
      )}
    </div>
  );
}

export default FlightSearchPage;
