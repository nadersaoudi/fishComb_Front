import axios from 'axios';
import { GET_CART, ADD_CART, DELETE_PROD_CART, UPDATE_QUANTITY, ERROR_UPDATE_QUANTITY, CART_ERROR, MY_ORDERS, ORDER_FAILS, PAYMENT_SUCCESS, PAYMENT_ERROR} from './types';
import {  CHECKOUT,CHECKOUT_FAILED} from './types';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
toast.configure();

//Show your cart 
export const showCart = () => async dispatch =>{
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{
        const res =await axios.get('/api/cart',config)
        dispatch ({
            type: GET_CART,
            payload: res.data
        })
       
    }catch {
        dispatch({
            type: CART_ERROR,
        })
        toast.error('cart error')
    }
}
//Add Cart
export const addCart = (product_id) => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.post('/api/cart',{product_id}, config)
        dispatch ({
            type: ADD_CART,
            payload: res.data.data
        })
        toast.info('Product Add to you Basket')
    }catch{

    }
}
// Delete Product in cart 
export const deleteProd = (cart_id) =>  async dispatch =>{
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try {   
        await axios.delete(`/api/cart/${cart_id}`,config)
        const res =await axios.get('/api/cart',config)
        dispatch ({
            type: GET_CART,
            payload: res.data
        })
        toast.success('Product Deleted')
    }catch{

    }
}
// Update Cart 
export const updateQuantity  = (formData , cart_id) => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.patch(`/api/cart/${cart_id}`,formData,config)
        dispatch ({
            type : UPDATE_QUANTITY,
            payload: res.data
        })
    
    }catch {
        dispatch({
            type: ERROR_UPDATE_QUANTITY,
        })
        toast.error('Update error')
    }
}
//checkout
//api/order
export const checkout = (formdata) =>  async dispatch =>{
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try {   
        const res = await axios.post(`/api/order`,formdata,config)
        console.log(res.data.data)
        dispatch ({
            type: CHECKOUT,
            payload: res.data.data
        })
        toast.info('Checkout success')
    }catch{
        toast.error('Checkout error')
        dispatch({
            type: CHECKOUT_FAILED,
        });
    }
}
export const stripelog =(token,address)=>async dispatch=>{
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try {   
        const res = await axios.post(`/api/getStripeResponse`,{token,address},config)
      /*  dispatch ({
            type: CHECKOUT,
            payload: res.data
        })*/
       // toast.info('Checkout success')
    }catch{
       // toast.error('Checkout error')
        dispatch({
            type: CHECKOUT_FAILED,
        });
    } 
}
//myOrders
export const myOrders =()=>async dispatch=>{
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.get(`/api/order/my_orders`,config)
        dispatch({
            type:MY_ORDERS,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:ORDER_FAILS
        })
    }
}
//Order_Payment
export const Order_Payment =(order_id)=>async dispatch=>{
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post(`/api/order/payment`,{order_id},config)
       /* dispatch({
            type:PAYMENT_SUCCESS,
           // payload:res.data
        })*/
        toast.success('payment success')
    } catch (error) {
        /*dispatch({
            type:PAYMENT_ERROR
        })*/
        toast.error('Error')
    } 
}
///api/order/cancel_payment
export const CancelPayment =(order_id)=>async dispatch=>{
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post(`/api/order/cancel_payment`,{order_id},config)
       /* dispatch({
            type:PAYMENT_SUCCESS,
           // payload:res.data
        })*/
        toast.info('payment canceled')
    } catch (error) {
        /*dispatch({
            type:PAYMENT_ERROR
        })*/
        toast.error('Error')
    }
}