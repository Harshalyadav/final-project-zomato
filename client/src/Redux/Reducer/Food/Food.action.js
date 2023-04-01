import axios from "axios";

// Redux types
import { GET_FOOD_LIST, GET_FOOD } from "./Food.type";

import {  API_URL } from "../../../key";

export const getFood = (foodId) => async (dispatch) => {
  try {
    const Food = await axios({
      method: "GET",
      url: `${API_URL}/food/${foodId}`,
    });

    return dispatch({ type: GET_FOOD, payload: Food.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const getFoodList = (menuId) => async (dispatch) => {
  try {
    const Menu = await axios({
      method: "GET",
      url: `${API_URL}/menu/list/${menuId}`,
    });

    return dispatch({
       type: GET_FOOD_LIST, 
       payload: Menu.data 
      });
  } catch (error) {
    return dispatch({
       type: "ERROR", 
       payload: error 
      });
  }
};
