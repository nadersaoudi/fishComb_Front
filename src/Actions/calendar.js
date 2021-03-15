import {GET_CALENDAR,CALENDAR_ERROR, ADD_CALENDAR} from './types'
import axios from 'axios'
import Cookies from 'js-cookie';
//get calendar /api/calendar
export const getCalendar = () => async dispatch => {

    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'

        }
    };

    try {
        const res = await axios.get('/api/calendar', config);
        
        dispatch({
            type: GET_CALENDAR,
            payload: res.data
        })
      
    } catch (err) {
        dispatch({
            type: CALENDAR_ERROR
        })
    }

  }
//get calendar /api/calendar
export const addtoCalendar = (formdata) => async dispatch => {

    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'

        }
    };

    try {
        const res = await axios.post('/api/calendar',{formdata}, config);
        
        dispatch({
            type: ADD_CALENDAR,
            payload: res.data
        })
      
    } catch (err) {
        dispatch({
            type: CALENDAR_ERROR
        })
    }

  }