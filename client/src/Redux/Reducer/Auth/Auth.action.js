import axios from "axios";

// Redux types
import { SIGN_IN, SIGN_UP, GOOGLE_AUTH, SIGN_OUT } from "./Auth.type";

// redux actions
import { getMyself, clearUser } from "../User/user.action";

import { API_URL, CLIENT_URL } from "../../../key";

export const signIn = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: `${API_URL}/auth/signin`,
      data: { credentials: userData },
    });

    getMyself();

    localStorage.setItem(
      "zomatoUser",
      JSON.stringify({ token: User.data.token })
    );

    return dispatch({ type: SIGN_IN, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
export const googleAuth = (token) => async (dispatch) => {
  try {
    localStorage.setItem("zomatoUser", JSON.stringify({ token }));

    getMyself();

    return dispatch({ type: GOOGLE_AUTH, payload: {} });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const signOut = () => async (dispatch) => {
  try {
    localStorage.removeItem("zomatoUser");
    clearUser();
    window.location.href = `${CLIENT_URL}/delivery`;

    return dispatch({ type: SIGN_OUT, payload: {} });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const signUp = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: `${API_URL}/auth/signup`,
      data: { credentials: userData },
    });

    getMyself();

    localStorage.setItem(
      "zomatoUser",
      JSON.stringify({ token: User.data.token })
    );

    return dispatch({ type: SIGN_UP, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
