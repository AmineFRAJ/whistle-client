import axios from 'axios';
import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAIL,
} from '../types/newsTypes';

export const getNews = () => async (dispatch) => {
  dispatch({ type: FETCH_NEWS_REQUEST });

  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/news`);
    dispatch({ type: FETCH_NEWS_SUCCESS, payload: data.articles });
  } catch (error) {
    dispatch({
      type: FETCH_NEWS_FAIL,
      payload: error.message || 'Failed to fetch news',
    });
  }
};
