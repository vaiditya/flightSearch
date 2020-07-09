import { GETTING_RESULTS, SET_RESULTS, GET_RESULTS_ERROR } from "./types";
import API from "api";
export const getInitialData = () => {
  return dispatch => {
    dispatch(gettingInitialData());
    const fetchPromise = fetch(API.FLIGHTS).then(res => res.json());
    fetchPromise
      .then(res => dispatch(setInitialData(res)))
      .catch(err => dispatch(getInitialDataError(err)));
  };
};

export const gettingInitialData = () => ({ type: GETTING_RESULTS });
export const setInitialData = payload => ({ type: SET_RESULTS, payload });
export const getInitialDataError = payload => ({
  type: GET_RESULTS_ERROR,
  payload
});
