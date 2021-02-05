import { DELETE_THREAD, GET_THREAD, ADD_THREAD, UPDATE_THREAD } from '../Actions/types';
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
                thread:state.thread.filter(thread => thread.id !==payload)
            }
        case UPDATE_THREAD: {
            return{
                ...state,
                thread : payload
            }
        }
        default:
            return state;
    }
}