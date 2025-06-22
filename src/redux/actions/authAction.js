
import axios from "axios";
import { base_URL } from "../../utils/constant";
import secureLocalStorage from "react-secure-storage";

// Login user action
export const loginUser = (credentials) => async (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });

  try {
    const res = await axios.post(`${base_URL}auth/login`, credentials);
    const { access_token } = res.data;

    // Fetch profile using token
    const profileRes = await axios.get(`${base_URL}auth/profile`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    const authData = {
      token: access_token,
      user: profileRes.data,
    };

    // Save to secure storage
    secureLocalStorage.setItem("auth", authData);

    // Dispatch success
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: authData,
    });

    return authData;
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error.response?.data?.message || "Login failed",
    });
    throw error;
  }
};

// Load auth from secure storage on app start
export const loadAuthFromStorage = () => (dispatch) => {
  const authData = secureLocalStorage.getItem("auth");
  if (authData?.token && authData?.user) {
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: authData,
    });
  }
};

// Logout action
export const logoutUser = () => (dispatch) => {
  secureLocalStorage.removeItem("auth");
  dispatch({ type: "LOGOUT" });
};




export const profileUser = () => {
  return async (dispatch) => {
    dispatch({ type: "AUTH_LOADING" });

    try {
      const token = secureLocalStorage.getItem("token"); // make sure token is saved here on login

      const response = await axios.get(`${base_URL}auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({
        type: "AUTH_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "AUTH_ERROR",
        payload: error.response?.data?.message || error.message,
      });
    }
  };
};







