import { ADD_EVENT, EVENT_ERROR ,GET_EVENTS,GET_EVENT, GET_CATEGORIES, DELETE_EVENT,FILTER_EVENT} from './types'
import axios from 'axios'
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
toast.configure();
//Add event
export const addEvent = ({ name,
    description,
    category_id,
    location,
    date,
    cover,
    video_link,
    status }) => async dispatch => {

        const config = {
            headers: {
                Authorization: 'Bearer ' + Cookies.get('user'),
                'content-Type': 'application/json'
            }
        }
        try {

            const res = await axios.post(`/api/events`, { name,
                description,
                category_id,
                location,
                date,
                cover,
                video_link,
                status }, config)
           
            dispatch({
                type: ADD_EVENT,
                payload: res.data.data,
            })
            toast.success('Event added');
        } catch (error) {
            toast.error('Error happened when adding event');
            dispatch({
                type: EVENT_ERROR,
            });
        }

    }

//get Events
export const getevents = () => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.get('/api/events', config)
        
        dispatch({
            type: GET_EVENTS,
            payload: res.data
        })
    } catch (error) {
        toast.error('Error happened when fetching events');
        dispatch({
            type: EVENT_ERROR,
        });
    }

}
//show single event
export const getevent = (eventID) => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.get(`/api/events/${eventID}`, config)
        
        dispatch({
            type: GET_EVENT,
            payload: res.data.data
        })
    } catch (error) {
        toast.error('Error happened when fetching event');
        dispatch({
            type: EVENT_ERROR,
        });
    }

}
///get categories
export const getcategories = () => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post(`api/events/categories`,{}, config)
       
        dispatch({
            type: GET_CATEGORIES,
            payload: res.data.data
        })
    } catch (error) {
        toast.error('Error happened when fetching event');
        dispatch({
            type: EVENT_ERROR,
        });
    }

}
//delete event
//show single event
export const deleteEvent = (eventID) => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.delete(`/api/events/${eventID}`, config)
        
        dispatch({
            type: DELETE_EVENT,
            payload:eventID
        })
    } catch (error) {
        toast.error('Error happened when fetching event');
        dispatch({
            type: EVENT_ERROR,
        });
    }

}
//127.0.0.1:8000/api/event/filter?sort[by]=name&sort[order]=asc
export const sortEvents = ({location1,asc}) => async dispatch => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + Cookies.get('user'),
            'content-Type': 'application/json'
        }
    }
    try {
        JSON.stringify({location1,asc})
        const res = await axios.get(`api/event/filter?sort[by]=${location1}&sort[order]=${asc}`,config)
       console.log(res);
        dispatch({
            type: FILTER_EVENT,
            payload: res.data
        })
    } catch (error) {
        toast.error('Error happened when fetching event');
        dispatch({
            type: EVENT_ERROR,
        });
    }

}