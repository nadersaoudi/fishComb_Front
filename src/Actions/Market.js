import axios from 'axios';
import { GET_MARKETS } from './types';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
toast.configure();
//Get Market
export const getMarket = () => async dispatch => {
    const config = {
        headers:{
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.get(`/api/marketplace/`,{},config)
        dispatch({
            type:GET_MARKETS,
            payload: res
        })
    }catch{

    }

}