import axios from 'axios';
import { GET_MARKETS, ADD_PRODUCT, GET_MY_PRODUCTS, GET_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, MARKET_CATERROR, GATEGORIES_MARKET} from './types';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
toast.configure();
//Get Products
export const getMarket = () => async dispatch => {
    const config = {
        headers:{
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.get(`/api/marketplace`,config)
        console.log(res);
        dispatch({
            type:GET_MARKETS,
            payload: res.data
        })
    }catch{
        
    }
}
//Add Product
export const addProduct = (formdata) => async dispatch => {
    const config = {
        headers:{
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.post(`/api/marketplace`,formdata,config)
        console.log(res);
        dispatch({
            type: ADD_PRODUCT,
            payload: res.data.data
        })
        toast.info('Product Added');
    }catch{
    }
}
//Get Product
export const getProduct = (productID) => async dispatch => {
    const config ={
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.get(`/api/marketplace/product/${productID}`, config)
        dispatch({
            type:GET_PRODUCT,
            payload: res.data.data
        })
    }catch{

    }
}

//Update Product 
export const updateProduct = (formdata, productID) => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.patch(`/api/marketplace/product/${productID}`,formdata,config)
        dispatch({
            type: UPDATE_PRODUCT,
            payload: res.data.data
        })
        toast.info('Product Updated');
    }catch{

    }
}
//My Product
export const myProduct = () => async dispatch => {
    const config = {
        headers:{
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.post(`/api/marketplace/my_products`,{},config)
        dispatch({
            type: GET_MARKETS,
            payload: res.data.data
        })
    }catch{
    }
}
//Delete Product 
export const deleteProduct = (productID) => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{
         await axios.delete(`/api/marketplace/product/${productID}` ,config)
         dispatch ({
             type: DELETE_PRODUCT,
             payload: productID
         })
         toast.error('Product Delete');
    }catch {

    }
}
//Categories Market
export const getCategories = () => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post(`/api/marketplace/categories`,{}, config)
       
        dispatch({
            type: GATEGORIES_MARKET,
            payload: res.data.data
        })
    } catch (error) {
       
        dispatch({
            type: MARKET_CATERROR,
        });
    }
}