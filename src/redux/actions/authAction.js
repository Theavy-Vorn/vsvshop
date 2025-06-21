
import axios from "axios";
import { base_URL } from "../../utils/constant";
import secureLocalStorage from "react-secure-storage";
// export const loginUser = (credentials) => async (dispatch) => {
//   dispatch({ type: "LOGIN_REQUEST" });

//   try {
//     const res = await axios.post(`${base_URL}auth/login`, credentials);

//     const { access_token } = res.data;

//     // Save token
//     localStorage.setItem("token", access_token);

//     // Optionally fetch profile here and return it
//     const profile = await axios.get(`${base_URL}auth/profile`, {
//       headers: {
//         Authorization: `Bearer ${access_token}`,
//       },
//     });

//     dispatch({
//       type: "LOGIN_SUCCESS",
//       payload: {
//         token: access_token,
//         user: profile.data,
//       },
//     });

//     return res.data; // helpful if you want to access token in component
//   } catch (error) {
//     dispatch({
//       type: "LOGIN_FAILURE",
//       payload: error.response?.data?.message || "Login failed",
//     });
//     throw error;
//   }
// };

export const loginUser = (credentials) => async (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });

  try {
    const res = await axios.post(`${base_URL}auth/login`, credentials);
    const { access_token } = res.data;

    // Save token to localStorage
    localStorage.setItem("token", access_token);

    // Fetch profile using token
    const profile = await axios.get(`${base_URL}auth/profile`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    // Dispatch login success with token and profile
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        token: access_token,
        user: profile.data,
      },
    });

    // Return token and user info so LoginPage can use them
    return {
      access_token,
      user: profile.data,
    };

  } catch (error) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error.response?.data?.message || "Login failed",
    });
    throw error;
  }
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
// Logout user and clear token
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: "LOGOUT" });
};



