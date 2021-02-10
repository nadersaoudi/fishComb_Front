import { GET_THREAD, ADD_THREAD, ADD_THREAD_ERROR, DELETE_THREAD, ERROR_DELETE_THREAD, UPDATE_THREAD, UPDATE_THREAD_ERRROR, GET_ONETHREAD, ERROR__THREAD, SEARCH_THREAD, SEARCH_THREAD_ERROR} from './types';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

//Toast Config 
toast.configure();

//Get Threads 
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
export const addThread = (file) => async dispatch => {
    const config = {
        headers : {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'Content-Type': 'multipart/form-data'
        }
    }
    try{
        const res = await axios.post('/api/threads',file,config)
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
//Update Thread 
export const upadateThread = (file, thread_id) => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'Content-Type': 'multipart/form-data'
        }
    }
    try{
        await axios.post(`/api/threads/update/${thread_id}`,file, config)
        const res = await axios.get('/api/threads',config)
        console.log('***', res.data)
        dispatch({
            type: GET_THREAD,
            payload: res.data
        })
        toast.info('Thread Updated');
    }catch {
        dispatch({
            type: UPDATE_THREAD_ERRROR
        })
    }
}
//Get Thread
export const getoneThread = (thread_id) => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.get(`/api/thread/${thread_id}`,config)
        dispatch ({
            type: GET_ONETHREAD,
            payload : res.data
        })
    }catch{
        dispatch({
            type: ERROR__THREAD
        })
    }
}
//Searsh Thread
export const searchThread = (filter,value) => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.post(`/api/threads/search`,{filter,value} , config)
        dispatch({
            type: SEARCH_THREAD,
            payload: res.data
        })
    }catch{
        dispatch({
            type: SEARCH_THREAD_ERROR,
        })
    }
}
//Get My Threads
{/*export const myThreads = () => async dispatch => {
    const config = {
        headers : {

        }
    }
}*/}