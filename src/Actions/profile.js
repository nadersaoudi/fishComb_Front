import axios from 'axios';
import Cookies from 'js-cookie';
import { UPDATE_PROFILE ,PROFILE_ERROR } from './types';
import { toast} from 'react-toastify';
import { loadUser } from './auth';


//edit user 
export const edit = (
     formdata, history, edit = false) => async dispatch => {
        toast.configure();
        try {
    const config = {
        headers: {
            Authorization : 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
         
        }
      };
          const res = await axios.patch('api/user/profile',formdata,config);  
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