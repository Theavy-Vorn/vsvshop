import { base_URL } from "../../utils/constant"
import { actionType } from "./actionType"

export const fetchAllProducts =() =>{
    return(dispatch)=>{
        fetch(`${base_URL}products`)
        .then(res=>res.json())
        .then(res=>dispatch({
            type :actionType.FETCH_PRODUCTS,
            payload :res
        }))
        .catch(err=>console.log('fetch product err :',err))
    }
}

export const fetchAllCategories =()=>{
    return(dispatch)=>{
        fetch(`${base_URL}categories`)
        .then(res=>res.json())
        .then(res=>dispatch({
            type:actionType.FETHC_CATEGORIES,
            payload:res
        }))
        .catch(err=>console.log('faild to fecth :',err))
    }
}


