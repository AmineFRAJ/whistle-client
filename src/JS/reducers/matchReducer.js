import {
  FETCH_MATCHES_REQUEST,
  FETCH_MATCHES_SUCCESS,
  FETCH_MATCHES_FAIL,
  FETCH_FINISHED_MATCHES_REQUEST,
  FETCH_FINISHED_MATCHES_SUCCESS,
  FETCH_FINISHED_MATCHES_FAIL,
  FILTER_MATCHES_REQUEST,
  FILTER_MATCHES_SUCCESS,
  FILTER_MATCHES_FAIL,
  CLEAR_MATCHES,
} from "../types/matchTypes";

const initialState = {
  loading: false,
  matches: [],
  finishedMatches: [],
  error: null,
  loaded: false,
  loadedFinished: false,
};

export const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_MATCHES:
      return {
        ...state,
        matches: [],
        finishedMatches: [],
        loaded: false,
        loadedFinished: false,
      };

    case FETCH_MATCHES_REQUEST:
    case FETCH_FINISHED_MATCHES_REQUEST:
      return { ...state, loading: true };

    case FETCH_MATCHES_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        matches: action.payload,
      };

    case FETCH_FINISHED_MATCHES_SUCCESS:
      return {
        ...state,
        loading: false,
        loadedFinished: true,
        finishedMatches: action.payload,
      };

    case FETCH_MATCHES_FAIL:
    case FETCH_FINISHED_MATCHES_FAIL:
      return { ...state, loading: false, error: action.payload };

    case FILTER_MATCHES_REQUEST:
      return { ...state, loading: true };

    case FILTER_MATCHES_SUCCESS:
      return { ...state, loading: false, matches: action.payload };

    case FILTER_MATCHES_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default matchReducer;
