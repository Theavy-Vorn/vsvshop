// // src/redux/actions/authActions.js
// import axios from "axios";
// import { actionType } from "./actionType";
// import secureLocalStorage from "react-secure-storage";
// import { base_URL } from "../../utils/constant"; // or hardcode if needed

// export const loginUser = (user) => {
//   return (dispatch) => {
//     return axios.post(`${base_URL}auth/login`, user, {
//       headers: { "Content-Type": "application/json" },
//     })
//     .then(res => {
//       if (res.status === 200 || res.status === 201) {
//         const token = res.data.access_token;
//         console.log("Token:", token); //  This logs the token in the browser console

//         secureLocalStorage.setItem("auth", res.data);
//         dispatch({
//           type: actionType.LOGIN,
//           payload: res.data,
//         });

//         return Promise.resolve(res.data);
//       }
//     })
//     .catch(err => {
//       console.error("Login failed:", err.response?.data || err.message);
//       return Promise.reject(err);
//     });
//   };
// };


import axios from "axios";
import { base_URL } from "../../utils/constant";

export const loginUser = (credentials) => async (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });

  try {
    const res = await axios.post(`${base_URL}login`, credentials);

    const { user, token } = res.data;
    localStorage.setItem("token", token);

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { user, token },
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error.response?.data?.message || "Login failed",
    });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: "LOGOUT" });
};
