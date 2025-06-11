
import axios from "axios";
import { base_URL } from "../../utils/constant";
import { actionType } from "./actionType";
import secureLocalStorage from "react-secure-storage";

export const loginUser = (user) => {
  return (dispatch) => {
    return axios.post(`${base_URL}auth/login`, user, {
      headers: { "Content-Type": "application/json" },
    })
    .then(res => {
      if (res.status === 200 || res.status === 201) {
        secureLocalStorage.setItem("auth", res.data);
        dispatch({
          type: actionType.LOGIN,
          payload: res.data,
        });
        return Promise.resolve(res.data); // return profile data
      }
    })
    .catch(err => {
      console.error("Login failed:", err.response?.data || err.message);
      return Promise.reject(err);
    });
  };
};
