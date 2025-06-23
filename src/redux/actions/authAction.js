import axios from "axios";
import { base_URL } from "../../utils/constant";
import secureLocalStorage from "react-secure-storage";

// Login user and fetch profile
export const loginUser = (credentials) => async (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });

  try {
    const res = await axios.post(`${base_URL}auth/login`, credentials);
    const { access_token } = res.data;

    // Fetch user profile with the token
    const profileRes = await axios.get(`${base_URL}auth/profile`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    const authData = {
      token: access_token,
      user: profileRes.data,
    };

    // Save to secure storage
    secureLocalStorage.setItem("auth", authData);

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: authData,
    });

    return authData; // for redirect if needed
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error.response?.data?.message || "Login failed",
    });
    throw error;
  }
};

// Load auth from secure local storage when app starts
export const loadAuthFromStorage = () => (dispatch) => {
  const authData = secureLocalStorage.getItem("auth");
  if (authData?.token && authData?.user) {
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: authData,
    });
  }
};

// Logout and clear local storage
export const logoutUser = () => (dispatch) => {
  secureLocalStorage.removeItem("auth");
  dispatch({ type: "LOGOUT" });
};

// Re-fetch profile using saved token
export const profileUser = () => async (dispatch) => {
  dispatch({ type: "AUTH_LOADING" });

  try {
    const token = secureLocalStorage.getItem("auth")?.token;
    if (!token) throw new Error("Token missing");

    const response = await axios.get(`${base_URL}auth/profile`, {
      headers: { Authorization: `Bearer ${token}` },
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
