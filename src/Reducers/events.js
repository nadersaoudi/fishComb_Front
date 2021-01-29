import {ADD_EVENT,GET_EVENTS,GET_EVENT, GET_CATEGORIES, DELETE_EVENT, FILTER_EVENT, INVITE_FRIENDS,GET_FRIENDS,UPDATE_EVENT, SEARCH_EVENT, GET_INV1,ACCEPT_EVENT, ATTENDED, SUBSCRIBE} from  '../Actions/types'
const initialState = {

    events: [],
    event: null,
    categories:null,
    friends:[],
    loading:true,
    inv:[],
    opted:[]
    
}
// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        
        case SEARCH_EVENT:
            return {
                ...state,
                events:payload,
                loading:false
            }
        case UPDATE_EVENT:
            return {
                ...state,
                event:payload,loading:false
            }
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
                    event:payload,
                    loading: false
                }
                case SUBSCRIBE:
                    return {
                        ...state,
                        event:payload,
                        loading:false
                    }
       case  ADD_EVENT:
        return{
            ...state,
            events:[payload,...state.events],
            loading:false
        }
        case ATTENDED :
            return {
                ...state,
                opted:payload
            }
        case GET_INV1:
            return {
                ...state,
                inv:payload
            }
            case ACCEPT_EVENT:
                return {
                    ...state,
                    inv: state.inv.filter(inv => inv.id !== payload.data.id),

                }
        default:
            return state;
    }
}