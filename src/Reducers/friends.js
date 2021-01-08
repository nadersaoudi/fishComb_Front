import { ADD_FRIEND,ADD_FRIEND_FAILED,SEARCH_SUCCESS,SEARCH_FAILED ,GET_INV} from '../Actions/types'

const initialState = {
    friend:null,
    friends: null,
    loading:false,
    users: []
}
// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SEARCH_SUCCESS:
        
            return {
                ...state,
                friend: payload, 
                loading:true
            }
            case  ADD_FRIEND:
                return {
                    ...state
                }
        case SEARCH_FAILED:
            return {
                    friend:null
                }
        case ADD_FRIEND_FAILED:
            return {
                ...state
            }
            case GET_INV:
            return {
               ...state,
                friends: payload,
                users:payload,
            }
        default:
            return state;
    }


}