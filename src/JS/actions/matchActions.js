import axios from "axios";
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

export const getMatches = () => async (dispatch) => {
  dispatch({ type: FETCH_MATCHES_REQUEST });
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/matches`);
    dispatch({ type: FETCH_MATCHES_SUCCESS, payload: data.matches });
  } catch (error) {
    dispatch({
      type: FETCH_MATCHES_FAIL,
      payload: error.message || "Failed to fetch matches",
    });
  }
};

export const getFinishedMatches = () => async (dispatch) => {
  dispatch({ type: FETCH_FINISHED_MATCHES_REQUEST });
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/matches/finished`);
    dispatch({ type: FETCH_FINISHED_MATCHES_SUCCESS, payload: data.matches });
  } catch (error) {
    dispatch({
      type: FETCH_FINISHED_MATCHES_FAIL,
      payload: error.message || "Failed to fetch finished matches",
    });
  }
};
export const filterLeagueMatches = (leagueName) => async (dispatch) => {
  dispatch({ type: FILTER_MATCHES_REQUEST });

  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/matches/league/${leagueName}`);
    dispatch({ type: FILTER_MATCHES_SUCCESS, payload: data.matches });
  } catch (error) {
    dispatch({
      type: FILTER_MATCHES_FAIL,
      payload: error.response?.data?.error || error.message || "Failed to filter league matches",
    });
  }
};
 export const clearMatches = () => ({
  type: CLEAR_MATCHES,
});