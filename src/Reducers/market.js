import { GET_MARKETS, GET_MY_PRODUCTS, GET_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT } from '../Actions/types';
const initialState = {
   markets:null,
   myproducts:null,
   product: null,
   loading:false
}
export default function (state = initialState, action){
    const { type, payload } = action;
    switch (type){
        case GET_MARKETS:
            return{
                ...state,
                markets:payload,
            }
        case GET_MY_PRODUCTS:
            return{
                ...state,
                myproducts:payload,
            }
        case ADD_PRODUCT:
            return{
                ...state,
                markets :[ payload, ...state.markets],
                loading:false
            }
        case GET_PRODUCT:
            return{
                ...state,
                product:payload,
            }
        case DELETE_PRODUCT:
            return{
                ...state,
                markest: state.markets.filter(product => product.id !== payload),
            }
            default:
                return state;
        }
}
    
