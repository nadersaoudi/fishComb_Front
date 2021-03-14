import {LOGIN_SUCCESS,LOGIN_FAIL,USER_LOADED,LOGOUT} from '../Actions/types';
import Cookies from 'js-cookie';
const initialState = {
   
    token: Cookies.get('user'),
    isAuthenticated: null,
    loading: true,
    user: null,
    success :false,
}
// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false,
                user:payload,
                isAuthenticated: true,
            }
            case USER_LOADED:
                return {
                    user:payload,
                }   
        case LOGIN_FAIL:
        case LOGOUT:
            Cookies.remove('user');
            Cookies.remove('profile');
            return {
                ...state, 
                user:null,
                isAuthenticated:null,
                token: null,
                loading: false,
                success: true,
            }
        default:
            return state;
    }
}