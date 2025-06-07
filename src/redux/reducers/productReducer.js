import { actionType } from "../actions/actionType"

const initialState = {
    products:[],
    categories:[],
    isLoading:true,
}
export const productReducer =(state = initialState,action)=>{
    const {type , payload} = action
    switch(type){
        case actionType.FETCH_PRODUCTS:
            //statement
            return{...state,products:payload,isLoading:false}
        case actionType.FETHC_CATEGORIES:
            return{...state,categories:payload}
            default:
                return state
    }
}