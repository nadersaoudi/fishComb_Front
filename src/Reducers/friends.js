import { ADD_FRIEND,ADD_FRIEND_FAILED,SEARCH_SUCCESS,SEARCH_FAILED} from '../Actions/types'

const initialState = {
    friend:null,
    loading:false

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
        default:
            return state;
    }


}