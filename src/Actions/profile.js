import axios from 'axios';
import Cookies from 'js-cookie';
import { UPDATE_PROFILE, PROFILE_ERROR, EDIT_PIC, GET_USER } from './types';
import { toast } from 'react-toastify';
import { loadUser } from './auth';

//edit user 
toast.configure();
export const edit = (
    formdata, history, edit = false) => async dispatch => {
        try {
            const config = {
                headers: {
                    Authorization: 'Bearer ' + Cookies.get('user'),
                    'content-Type': 'application/json'
                }
            };
            const res = await axios.patch('api/user/profile', formdata, config);
            dispatch({
                type: UPDATE_PROFILE,
                payload: res.data,
            });
            loadUser()
            toast.success('Profile Updated');
            window.location.reload(false);
        }
        catch (err) {
            toast.error('Email is null ')
            dispatch({
                type: PROFILE_ERROR,
            });
        }
    }
export const picture =  file => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'Content-Type': 'multipart/form-data'
        }
    }
    try {
        const res = await axios.post('/api/user/user-images', file, config)
        console.log(res.data + " res")
        dispatch({
            type: EDIT_PIC,
            payload: res.data.data,
        })
        toast.success('image uploaded');
        window.location.reload(false);
    } catch (err) {
        toast.error('problem occured');
    }
};
//Get Users
export const getUser =( user_id )=> async dispatch => {
    const config = {
        headers :{
            Authorization: 'Bearer ' + Cookies.get('user'),
            'Content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.post(`/api/user/user-profile`,{user_id},config) 
        dispatch ({
            type:GET_USER,
            payload: res.data
        })

    }catch{

    }
}