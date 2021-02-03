import { GET_THREAD, ADD_THREAD, ADD_THREAD_ERROR, DELETE_THREAD, ERROR_DELETE_THREAD } from './types';
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
    const res = await axios.get('/api/threads',config)
    console.log('***', res.data)
    dispatch({
        type: GET_THREAD,
        payload: res.data
    })
}
//Add Thread
export const addThread = (formData) => async dispatch => {
    const config = {
        headers : {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.post('/api/threads',formData , config)
        dispatch({
            type: ADD_THREAD,
            payload: res.data
        })
        toast.info('Thread Added')
    }catch{
        dispatch ({
            type: ADD_THREAD_ERROR,
        })
        toast.error('error added')
    }

}
//Delet Thread 
export const deleteTreadh = (thread_id) => async dispatch => {
    const config ={
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.delete(`/api/threads/${thread_id}`,config)
        dispatch ({
            type: DELETE_THREAD,
            payload:thread_id
        })
        toast.info('Thread Delete')
    }catch{
        dispatch({
            type:ERROR_DELETE_THREAD
        })
    }
}