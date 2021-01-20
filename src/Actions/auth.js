import axios from 'axios';
import Cookies from 'js-cookie';
import { LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_SUCCESS, USER_LOADED, AUTH_ERROR, LOGOUT, RESET_OK, CLEAR_PROFILE } from './types'
import { toast } from 'react-toastify';
//Login User
toast.configure();
export const log = ( login, password) => async dispatch => {
    const config = {
        headers: {
            'content-Type': 'application/json'
        }
    }
    const data = JSON.stringify({
        login,
        password,
    });
    try {
        //const res = await 
       await axios.post('api/user/login', data, config).then((res) => {
            Cookies.set('user', res.data.token);
            const config2 = {
                headers: {
                    Authorization: 'Bearer ' + Cookies.get('user'),
                    'content-Type': 'application/json'
                }
            };
              axios.post('api/user/profile', {}, config2).then((res2) => {
                Cookies.get('profile', res2.data.data);
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res2.data.data,  
                });
                Cookies.get('profile', res2.data.data);
                toast.success('succesfully logged in')
            });
            
        }).catch((err)=>{
            toast.error('Invalid Credentials')
            dispatch({
                type: LOGIN_FAIL,
            })  
        });
    } catch (err) {
        // const errors = err.response.data.errors;
      /*  toast.error('Error')
        dispatch({
            type: LOGIN_FAIL,
        })*/
    }
}
// Register  User
export const register = ({  first_name,    last_name,    email,    password,    birth_date,    gender}) => async dispatch => {
    const config = {
        headers: {
            'content-Type': 'application/json'
        }
    }
    const data = JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        birth_date,
        gender
    });
    console.log(data);
    try {
        const res = await axios.post('api/user/register', data, config)


        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })


    } catch (err) {

    }
}

//loadUser 
export const loadUser = () => async dispatch => {

    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'

        }
    };

    try {
        const res = await axios.post('api/user/profile', {}, config);
        
        dispatch({
            type: USER_LOADED,
            payload: res.data.data
        })
        Cookies.set('profile', res.data.data)
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }

  }


    //reset 
    export const reset = (email ) => async dispatch => {
        toast.configure();
        const config = {
            headers: {
                'content-Type': 'application/json'
            }
        }
        const data = JSON.stringify({
            email
        });

        try {
            const res = await axios.post('api/password/forget', data, config)

            toast.success('Please check your Email for the activation link')
            dispatch({
                type: RESET_OK,
                payload: res.data
            })
        } catch (err) {
            toast.error('This email does not Exist please sign in')
        }
    }
 //logout
    export const logout = () => dispatch => {
        dispatch({
            type: CLEAR_PROFILE
        });
        dispatch({
            type: LOGOUT
        });
    }




