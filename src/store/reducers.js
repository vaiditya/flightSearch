import { GETTING_RESULTS, SET_RESULTS, GET_RESULTS_ERROR } from "./types";

const initialState = {
  loading: false,
  loaded: false,
  isError: false,
  errMsg: undefined,
  data: {}
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
    default:
      return { ...state };
  }
};
