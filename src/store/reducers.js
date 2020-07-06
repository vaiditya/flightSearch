import {
  GETTING_RESULTS,
  SET_RESULTS,
  GET_RESULTS_ERROR,
  COMPUTE_RESULTS
} from "./types";
import { calcDifference } from "../utils";

const initialState = {
  loading: false,
  loaded: false,
  isError: false,
  errMsg: undefined,
  data: {},
  results: {
    origin: "",
    destination: "",
    startDate: undefined,
    returnDate: undefined,
    direct: [],
    indirect: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GETTING_RESULTS:
      return { ...state, loading: true, loaded: false };
    case SET_RESULTS:
      return { ...state, loading: false, loaded: true, data: action.payload };
    case GET_RESULTS_ERROR:
      return {
        ...state,
        loading: true,
        loaded: true,
        isError: true,
        errMsg: action.payload
      };
    case COMPUTE_RESULTS:
      const { origin, destination, startDate, returnDate } = action.payload;
      const { data } = state;
      const directFlights = data
        .filter(
          journey =>
            journey.origin === origin && journey.destination === destination
        )
        .map(flight => {
          const diff = calcDifference(flight.departureTime, flight.arrivalTime);
          return {
            ...flight,
            diff
          };
        });
      // const directFlights = data.filter(
      //   journey =>
      //     journey.origin === "Mumbai (BOM)" &&
      //     journey.destination === "Pune (PNQ)"
      // );
      const fromOrigin = data.filter(journey => journey.origin === origin);
      // const fromOrigin = data.filter(
      //   journey => journey.origin === "Mumbai (BOM)"
      // );
      const toDestination = data.filter(
        journey => journey.destination === destination
      );
      // const toDestination = data.filter(
      //   journey => journey.destination === "Pune (PNQ)"
      // );

      let indirectFlights = [];
      const fromLength = fromOrigin.length;
      for (let i = 0; i < fromLength; i++) {
        const toDestinationLength = toDestination.length;
        for (let j = 0; j < toDestinationLength; j++) {
          if (toDestination[j].origin === fromOrigin[i].destination) {
            if (!toDestination[j].diff) {
              toDestination[j].diff = calcDifference(
                toDestination[j].departureTime,
                toDestination[j].arrivalTime
              );
            }

            if (!fromOrigin[i].diff) {
              fromOrigin[i].diff = calcDifference(
                fromOrigin[i].departureTime,
                fromOrigin[i].arrivalTime
              );
            }

            indirectFlights = [
              ...(indirectFlights || []),
              { first: fromOrigin[i], second: toDestination[j] }
            ];
          }
        }
      }

      return {
        ...state,
        results: {
          ...state.results,
          origin,
          destination,
          direct: directFlights,
          indirect: indirectFlights
        }
      };

    default:
      return { ...state };
  }
};
