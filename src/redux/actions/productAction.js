// import { base_URL } from "../../utils/constant"
// import { actionType } from "./actionType"

// export const fetchAllProducts =() =>{
//     return(dispatch)=>{
//         fetch(`${base_URL}products`)
//         .then(res=>res.json())
//         .then(res=>dispatch({
//             type :actionType.FETCH_PRODUCTS,
//             payload :res
//         }))
//         .catch(err=>console.log('fetch product err :',err))
//     }
// }

// export const fetchAllCategories =()=>{
//     return(dispatch)=>{
//         fetch(`${base_URL}categories`)
//         .then(res=>res.json())
//         .then(res=>dispatch({
//             type:actionType.FETHC_CATEGORIES,
//             payload:res
//         }))
//         .catch(err=>console.log('faild to fecth :',err))
//     }
// }

// // delete product
// export const deleteProduct = async (id) => {
//     return await fetch(`${base_URL}products/${id}`, {
//         method: 'DELETE',
//     });
// };


// src/redux/actions/productAction.js
import { base_URL } from "../../utils/constant";
import { actionType } from "./actionType";

// Fetch all products
export const fetchAllProducts = () => {
  return (dispatch) => {
    fetch(`${base_URL}products`)
      .then((res) => res.json())
      .then((res) =>
        dispatch({
          type: actionType.FETCH_PRODUCTS,
          payload: res,
        })
      )
      .catch((err) => console.log("Fetch product error:", err));
  };
};

// ✅ Fixed: FETCH_CATEGORIES spelling
export const fetchAllCategories = () => {
  return (dispatch) => {
    fetch(`${base_URL}categories`)
      .then((res) => res.json())
      .then((res) =>
        dispatch({
          type: actionType.FETCH_CATEGORIES, // ✅ Fixed typo here
          payload: res,
        })
      )
      .catch((err) => console.log("Failed to fetch categories:", err));
  };
};

// Delete product
export const deleteProduct = async (id) => {
  return await fetch(`${base_URL}products/${id}`, {
    method: "DELETE",
  });
};




