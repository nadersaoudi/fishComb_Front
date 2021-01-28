import axios from 'axios';
import { GET_CART, ADD_CART, DELETE_PROD_CART} from './types';
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