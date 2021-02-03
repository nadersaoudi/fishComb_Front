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
    UPDATE_QUANTITY,
    CHECKOUT,
    MY_ORDERS,
    ORDER_FAILS,
    PAYMENT_ERROR,
    PAYMENT_SUCCESS
  } from '../Actions/types';
  
  const initialStore = {
    cart: [],
    carts:[],
    total: 0,
    amount: 0,
    order:null,
    orders:[]
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
       // cart:[...state.cart,action.payload]
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
     if (action.type === CHECKOUT){
      return {
        ...state,
        order: action.payload
      }
    }
    if (action.type === MY_ORDERS){
      return {
        ...state,
        orders: action.payload
      }
    }
    if (action.type === ORDER_FAILS){
      return {
        ...state
      }
    }
    if (action.type === PAYMENT_SUCCESS){
      return {
        ...state
      }
    }
    if (action.type === PAYMENT_ERROR){
      return {
        ...state
      }
    }
    return state;
  }
  
  export default reducer;