// import secureLocalStorage from "react-secure-storage"
// import { actionType } from "../actions/actionType"

// const auth = secureLocalStorage.getItem('auth')
// const initialState = auth ? {isLogin : true , auth:auth} : {isLogin : false ,auth:null}

// export const authReducer =(state = initialState,action)=>{
//     const {type,payload} =action
//     switch(type){
//         case actionType.LOGIN:
//             return {...state,isLogin :true,auth:payload}
//             default:
//                 return state
//     }
// }


// import secureLocalStorage from "react-secure-storage";
// import { actionType } from "../actions/actionType";

// const auth = secureLocalStorage.getItem('auth');
// const initialState = auth ? { isLogin: true, auth: auth } : { isLogin: false, auth: null };

// export const authReducer = (state = initialState, action) => {
//     const { type, payload } = action;
//     switch (type) {
//         case actionType.LOGIN:
//             return { ...state, isLogin: true, auth: payload };
//         default:
//             return state;
//     }
// };



// redux/reducers/authReducer.js
import secureLocalStorage from "react-secure-storage";
import { actionType } from "../actions/actionType";

const auth = secureLocalStorage.getItem("auth");
const initialState = auth ? { isLogin: true, auth } : { isLogin: false, auth: null };

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.LOGIN:
      return { ...state, isLogin: true, auth: payload };
    case actionType.LOGOUT:
      secureLocalStorage.removeItem("auth");
      return { isLogin: false, auth: null };
    default:
      return state;
  }
};
