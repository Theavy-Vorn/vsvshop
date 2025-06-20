import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    proReducers : productReducer,
    authReducer : authReducer,
    userReducer: userReducer,
})


