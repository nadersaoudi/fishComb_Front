import axios from 'axios';
import { GET_MARKETS, ADD_PRODUCT, GET_MY_PRODUCTS, 
    GET_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, MARKET_CATERROR,
     GATEGORIES_MARKET, SEARCH_PRODUCT, PRODUCT_ERROR, SEARCH_PRODUCT_ERROR,DELETE_PRODUCT_ERROR,UPDATE_PRODUCT_ERROR} from './types';
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
export const addProduct = file => async dispatch => {
    const config = {
        headers:{
            Authorization: 'Bearer ' + Cookies.get('user'),
            'Content-Type': 'multipart/form-data'
        }
    }
    try{
        const res = await axios.post(`/api/marketplace`,file,config)
        console.log(res);
        dispatch({
            type: ADD_PRODUCT,
            payload: res.data.data
        })
        toast.info('Product Added');
    } catch (err) {
        const errors = err.response.data.errors;
            toast.error(errors.category_id[0])
            toast.error(errors.image[0])
            toast.error(errors.description[0])
            toast.error(errors.name[0])
            toast.error(errors.price[0])
            toast.error(errors.stock[0])
            
        dispatch({
            type: PRODUCT_ERROR,
        });
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
            'Content-Type': 'multipart/form-data'
        }
    }
    try{
        const res = await axios.post(`/api/marketplace/product/${productID}`,formdata,config)
        dispatch({
            type: UPDATE_PRODUCT,
            payload: res.data.data
        })
        toast.info('Product Updated');
    }catch{
        dispatch({
            type: UPDATE_PRODUCT_ERROR,
        })
        toast.error('Error Updated');
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
            payload: res.data
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
         toast.info('Product Delete');
    }catch {
        dispatch ({
            type: DELETE_PRODUCT_ERROR,
        })
        toast.error('Error Delete');
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
//Search Product
export const search = (filter,value) => async dispatch => {
    const config = {
        headers:{
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.post(`/api/marketplace/search`,{filter,value},config)
        dispatch({
            type: SEARCH_PRODUCT,
            payload:res.data
        })
    }catch{
        toast.error('Error happened when fetching Product');
        dispatch({
            type: SEARCH_PRODUCT_ERROR,
        })
       
    }
}
