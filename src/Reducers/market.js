import { GET_MARKETS, GET_MY_PRODUCTS, GET_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, GATEGORIES_MARKET } from '../Actions/types';
const initialState = {
   markets:null,
   myproducts:null,
   categories:null,
   product: null,
   loading: true
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
                loading:false
            }
        case DELETE_PRODUCT:
            return{
                ...state,
                markest: state.markets.filter(product => product.id !== payload),
            }
        case UPDATE_PRODUCT:
            return{
                ...state,
                product: payload,
                loading:false
            }
        case GATEGORIES_MARKET:
            return {
                ...state,
                categories:payload
            }
            default:
                return state;
        }
}
    