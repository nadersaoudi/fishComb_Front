import {
    DECREASE,
    INCREASE,
    CLEAR_CART,
    REMOVE,
    GET_TOTALS,
    TOGGLE_AMOUNT,
    GET_CART,
    ADD_CART,
    DELETE_PROD_CART,
    UPDATE_QUANTITY
  } from '../Actions/types';
  
  const initialStore = {
    cart: [],
    carts:[],
    total: 0,
    amount: 0
  };
  function reducer(state = initialStore, action) {
     if (action.type === GET_CART){
         return {
             ...state,
             cart: action.payload
         }
     }
     if (action.type === ADD_CART){
      return {
          ...state,
       
      }
  }
     if (action.type === DELETE_PROD_CART) {
         return {
             ...state,
             cart:state.cart.carts.filter(cart => cart.cart_id !== action.payload)
         }
     }
     if (action.type === UPDATE_QUANTITY){
       return {
         ...state,
         cart: action.payload
       }
     }
    return state;
  }
  
  export default reducer;