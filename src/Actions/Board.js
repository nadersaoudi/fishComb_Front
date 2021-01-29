import { GET_THREAD } from './types';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

//Toast Config 
toast.configure();

//Get Thread 
export const getThread  =  () => async dispatch => {
    const config = {
        headers : {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    const res = await axios.get('/api/threads',{},config)
    dispatch({
        type: GET_THREAD,
        payload: res.data
    })
}