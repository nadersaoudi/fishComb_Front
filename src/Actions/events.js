import { ADD_EVENT, EVENT_ERROR ,GET_EVENTS} from './types'
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
            console.log(res.data)
            dispatch({
                type: ADD_EVENT,
                payload: res.data,
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