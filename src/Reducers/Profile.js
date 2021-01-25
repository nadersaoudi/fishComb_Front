import {PROFILE_ERROR, EDIT_PIC ,GET_USER } from "../Actions/types";



const initialState = {
    profile: null,
    profiles: [],
    loading: true,
    error: {}

}
// eslint-disable-next-line
export default function (state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case EDIT_PIC:
            return {
                ...state,
                profile: payload
            }
        case PROFILE_ERROR:
            return { ...state }
        
        case GET_USER:
            return {
                profile: payload,
                loading: false
            }

        default:
            return state;



    }

}