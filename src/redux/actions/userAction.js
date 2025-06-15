import axios from "axios";
import { base_URL } from "../../utils/constant";

// GET all users
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

// CREATE a new user
export const createUser = (userData) => {
  return (dispatch) => {
    return axios.post(`${base_URL}users`, userData)
      .then((res) => {
        dispatch({
          type: "CREATE_USER",
          payload: res.data,
        });
      })
      .catch((error) => {
        console.error("Failed to create user:", error);
      });
  };
};

// update user

export const updateUser = (userId, userData) => {
  return (dispatch) => {
    return axios
      .put(`${base_URL}users/${userId}`, userData)
      .then((res) => {
        dispatch({
          type: "UPDATE_USER",
          payload: res.data,
        });
        return res.data;        // Return for chaining in component
      })
      .catch((error) => {
        console.error("Failed to update user:", error);
        throw error;            // Propagate for component error handling
      });
  };
};

// delete user
// redux/actions/userAction.js


export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`${base_URL}users/${id}`);
    dispatch({ type: "DELETE_USER_SUCCESS", payload: id });
  } catch (error) {
    console.error("Delete user failed:", error);
  }
};
