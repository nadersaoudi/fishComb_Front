import { GET_THREAD } from '../Actions/types';
const initialState = {
    thread: [],
    loading:true,
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
        default:
            return state;
    }
}