// import { actionType } from "../actions/actionType"

// const initialState = {
//     products:[],
//     categories:[],
//     isLoading:true,
// }
// export const productReducer =(state = initialState,action)=>{
//     const {type , payload} = action
//     switch(type){
//         case actionType.FETCH_PRODUCTS:
//             //statement
//             return{...state,products:payload,isLoading:false}
//         case actionType.FETCH_CATEGORIES:
//             return{...state,categories:payload}
//             default:
//                 return state
//     }
// }
// src/redux/reducers/productReducer.js
import { actionType } from "../actions/actionType";

const initialState = {
  products: [],
  categories: [],
  isLoading: true,
};

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionType.FETCH_PRODUCTS:
      return {
        ...state,
        products: payload,
        isLoading: false,
      };

    case actionType.FETCH_CATEGORIES: // ✅ fixed key
      return {
        ...state,
        categories: payload,
      };

    default:
      return state;
  }
};
