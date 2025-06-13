// src/redux/actions/userAction.js

import axios from "axios";
import { base_URL } from "../../utils/constant";

export const userAction = () => {
  return (dispatch) => {
    return axios.get(`${base_URL}users`)
      .then((res) => {
        dispatch({
          type: "USERS",
          payload: res.data,
        });
      })
      .catch((error) => {
        console.error("Failed to fetch users:", error);
      });
  };
};
