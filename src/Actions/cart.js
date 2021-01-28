import axios from 'axios';
import { GET_CART, ADD_CART, DELETE_PROD_CART, UPDATE_QUANTITY, ERROR_UPDATE_QUANTITY, CART_ERROR} from './types';
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
        console.log(res.data)
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
            payload: res.data
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
        const res = await axios.delete(`/api/cart/${cart_id}`,config)
        dispatch ({
            type: DELETE_PROD_CART,
            payload: cart_id
        })
        toast.info('Product Deleted')
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