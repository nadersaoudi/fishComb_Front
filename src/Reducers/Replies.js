import { ADD_REPLY, DELETE_REPLY, GET_REPLIES, UPDATE_REPLY } from '../Actions/types';
const initialState = {
    replies: [],
    loading:true,
    isAuthenticated: false,
    error :{}
};
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_REPLIES:
            return {
                ...state,
                replies:payload,
                loading:false
            }
        case ADD_REPLY: 
        return{
            ...state,
            replies:payload,
            loading:false
        }
        case DELETE_REPLY:
            return{
                ...state,
                replies:state.replies.filter(replies => replies.id !==payload)
            }
        case UPDATE_REPLY :
            return{
            ...state,
            replies:payload,
            loading:false,
        }
        default:
            return state;
    }
}