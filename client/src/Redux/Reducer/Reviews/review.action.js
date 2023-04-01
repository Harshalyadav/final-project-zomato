import axios from "axios";

// Redux types
import { GET_REVIEW, POST_REVIEW } from "./review.type";

import { API_URL } from "../../../key";

export const getReviews = (resId) => async (dispatch) => {
  try {
    const reviewList = await axios({
      method: "GET",
      url: `${API_URL}/reviews/${resId}`,
    });

    return dispatch({ type: GET_REVIEW, payload: reviewList.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const postReviews = (reviewData) => async (dispatch) => {
  try {
    await axios({
      method: "POST",
      url: `${API_URL}/reviews/new`,
      data: { reviewData },
    });

    return dispatch({
      type: POST_REVIEW,
      payload: reviewData,
    });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
