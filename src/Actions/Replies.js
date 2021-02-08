import { GET_REPLIES, GET_REPLIES_ERROR, ADD_REPLY, ADD_REPLY_ERROR, UPDATE_REPLY, UPDATE_REPLY_ERROR, DELETE_REPLY, DELETE_REPLY_ERROR } from './types';
import { toast } from 'react-toastify';
import axios from 'axios';
import Cookies from 'js-cookie';

toast.configure();


//Get Replies 
export const getReplies = (thread_id) => async dispatch => {
    const config ={
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.get(`/api/thread/${thread_id}/replies`,config)
        dispatch ({
            type: GET_REPLIES,
            payload : res.data
        })
    }catch (error){
        dispatch({
            type: GET_REPLIES_ERROR
        })
    }
}
//Post Replies 
export const addReplies = (formData, thread_id) => async dispatch => {
    const  config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.post(`/api/thread/${thread_id}/reply`,formData,config)
        dispatch({
            type: ADD_REPLY,
            payload: res.data.data
        })
        console.log('----------',res.data.data)
        toast.info('Add Succes')
    }catch (error){
        dispatch({
            type: ADD_REPLY_ERROR,
        })
    }
}
//Update Reply 
export const updateReply = (formData, reply_id) => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.patch(`/api/thread/${reply_id}/reply`, formData , config)
        dispatch({
            type: UPDATE_REPLY,
            payload: res.data
        })
        toast.info('Update Succes')
    }catch (error) {
        dispatch({
            type: UPDATE_REPLY_ERROR
        })
    }
}
//Delete Reply 
export const deleteReply = (reply_id) => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try{  
        const res = await axios.delete (`/api/thread/replies/reply_id`, config )
        dispatch({
            type : DELETE_REPLY,
            payload : res.data
        })
    }catch (error) {
        dispatch({
            type:DELETE_REPLY_ERROR,
        })
    }
}