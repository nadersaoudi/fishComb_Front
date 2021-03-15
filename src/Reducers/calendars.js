import {GET_CALENDAR,CALENDAR_ERROR, ADD_CALENDAR  } from '../Actions/types';
const initialState = {
    calendars:[]
}
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
       case GET_CALENDAR:
           return {
               ...state,
               calendars:payload
           }
        case ADD_CALENDAR: 
        return {
            ...state,
            calendars:[payload,...state.calendars]
        }
        default:
            return state;
    }
}