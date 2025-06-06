import { actionType } from "../actions/actionType"

const initialState = {
    products:[],
    categories:[]
}
export const productReducer =(state = initialState,action)=>{
    const {type , payload} = action
    switch(type){
        case actionType.FETCH_PRODUCTS:
            //statement
            return{...state,products:payload}
        case actionType.FETHC_CATEGORIES:
            return{...state,categories:payload}
            default:
                return state
    }
}