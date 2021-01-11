import {ADD_EVENT,GET_EVENTS} from  '../Actions/types'
const initialState = {

    events: [],
    event: null
}
// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_EVENTS :
            return {
                ...state,
                events:payload
            }
       case  ADD_EVENT:
        return{
            ...state,
            events:[payload,...state.events]
        }
        default:
            return state;
    }
}