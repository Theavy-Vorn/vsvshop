import axios from "axios"
import { base_URL } from "../../utils/constant"
import { actionType } from "./actionType"
import { type } from "@testing-library/user-event/dist/type"
import secureLocalStorage from "react-secure-storage"

// export const loginUser =(user)=>{
//     return(dispatch)=>{
//         axios(`${base_URL}auth/login`,{
//             method:"POST",
//             headers:{
//                 "ContentType" : "application/json",    
//             },
//            data:JSON.stringify(user)
//         })
//         .then(res=>{
//             if(res.status === 201){
//                 secureLocalStorage.setItem('auth',res)
//                 dispatch({
//                     type:actionType.LOGIN,
//                     payload:res
//                 })
//                 return Promise.resolve()
//             }
//         })
//          return Promise.resolve()
        
//     }
// }


// redux/actions/authAction.js

// import axios from "axios";
// import { base_URL } from "../../utils/constant";
// import { actionType } from "./actionType";
// import secureLocalStorage from "react-secure-storage";

// export const loginUser = (user) => {
//     return (dispatch) => {
//         axios.post(`${base_URL}auth/login`, user, {
//             headers: {
//                 "Content-Type": "application/json",
//             }
//         })
//         .then(res => {
//             if (res.status === 201 || res.status === 200) {
//                 secureLocalStorage.setItem('auth', res.data); // Store only the response data
//                 dispatch({
//                     type: actionType.LOGIN,
//                     payload: res.data,
//                 });
//             }
//         })
//         .catch(err => {
//             console.error("Login failed:", err.response?.data || err.message);
//         });
//     };
// };



export const loginUser = (user) => {
  return (dispatch) => {
    return axios.post(`${base_URL}auth/login`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => {
      if (res.status === 200 || res.status === 201) {
        secureLocalStorage.setItem('auth', res.data);
        dispatch({
          type: actionType.LOGIN,
          payload: res.data,
        });
        return Promise.resolve();
      }
    })
    .catch(err => {
      console.error("Login failed:", err.response?.data || err.message);
      return Promise.reject(err);
    });
  };
};
