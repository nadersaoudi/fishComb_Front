import { GET_THREAD, ADD_THREAD, ADD_THREAD_ERROR, DELETE_THREAD, ERROR_DELETE_THREAD  } from '../Actions/types';
const initialState = {
    thread: [],
    threads:[],
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
                    isAuthenticated :true ,
                    ...state,
                    thread :[payload,...state.thread],
                    loading : false
                }
                case ADD_THREAD_ERROR:
                    return{
                        ...state
                    }
                    case DELETE_THREAD:
                        return {
                            ...state,
                            threads: state.threads.filter(thread => thread.data.id !== payload),
                            loading: false
                        }
                    case ERROR_DELETE_THREAD:
                        return{
                            ...state,
                        }                        
        default:
            return state;
    }
}