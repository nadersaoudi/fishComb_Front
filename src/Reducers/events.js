import {ADD_EVENT,GET_EVENTS,GET_EVENT, GET_CATEGORIES, DELETE_EVENT, FILTER_EVENT, INVITE_FRIENDS,GET_FRIENDS} from  '../Actions/types'
const initialState = {

    events: [],
    event: null,
    categories:null,
    friends:[]
}
// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case INVITE_FRIENDS:
            return {
                ...state,
            }
        case GET_FRIENDS:
            return {
                ...state,
                friends:payload
            }
        case FILTER_EVENT:
            return {
                ...state,
                 events:payload
            }
        case DELETE_EVENT:
            return {
                ...state,
                events: state.events.filter(event => event.id !== payload),
            }
        case GET_CATEGORIES:
            return {
                ...state,
                categories:payload
            }
        case GET_EVENTS :
            return {
                ...state,
                events:payload
            }
            case GET_EVENT :
                return {
                    ...state,
                    event:payload
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