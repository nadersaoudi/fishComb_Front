import { DELETE_THREAD, GET_THREAD, ADD_THREAD, UPDATE_THREAD, GET_ONETHREAD, SEARCH_THREAD, GETMT_THREADS } from '../Actions/types';
const initialState = {
    thread: [],
    threads: null,
    loading:true,
    isAuthenticated: false,
    error :{}
};
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_THREAD:
            return {
                ...state,
                thread:payload,
                loading:false
            }
        case ADD_THREAD:
            return {
                ...state,
                thread:[payload,...state.thread],
                loading:false
            }
        case DELETE_THREAD:
            return {
                ...state,
                thread:state.thread.filter(thread => thread.data.id !==payload)
            }
        case UPDATE_THREAD: {
            return{
                ...state,
                thread:payload,
                loading:false,
            }
        }
        case GET_ONETHREAD: {
            return{
                ...state,
                threads:payload
            }
        }
        case SEARCH_THREAD: {
            return{
                ...state,
                thread: payload,
                loading:false
            }
        }
        case GETMT_THREADS: {
            return{
                ...state,
                thread: payload,
                loading:false
            }
        }
        default:
            return state;
    }
}