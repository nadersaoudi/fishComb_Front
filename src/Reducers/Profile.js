import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, UPDATE_PROFILE, GET_PROFILES, EDIT_PIC } from "../Actions/types";



const initialState = {
    profile: null,
    profiles: [],
    loading: true,
    error: {}

}
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

        default:
            return state;



    }

}