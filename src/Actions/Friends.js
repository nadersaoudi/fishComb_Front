
import { ADD_FRIEND, ADD_FRIEND_FAILED, SEARCH_SUCCESS, SEARCH_FAILED } from './types'
import axios from 'axios'
import Cookies from 'js-cookie';
import { toast} from 'react-toastify';


toast.configure();
export const Searchfriend = (formData) => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'Content-type': 'application/json'
        }
    }

    try {
        const res = await axios.post('/api/user/friends/search', formData, config)
        dispatch({
            type: SEARCH_SUCCESS,
            payload: res.data.users
            
        })
       
    } catch (error) {
        console.log(error)
        dispatch({ type: SEARCH_FAILED })
        toast.error('invalid user, Please check the name');
    }
}
export const addFriend = friend_id =>  dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'Content-type': 'application/json'
        }
    }
try {
      axios.post('/api/user/friends/sent', friend_id, config)
  
    dispatch({
        type: ADD_FRIEND,
        
    })
    toast.success('Invitaion Send');
} catch (error) {
   // console.log(error)
        dispatch({ type: ADD_FRIEND_FAILED })
        toast.error('problem happened'); 
}


}
