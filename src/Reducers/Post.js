import { GET_POSTS, POST_ERROR, UPDATE_LIKES, DELETE_POST, ADD_POST, GET_POST, ADD_COMMENT, REMOVE_COMMENT } from '../Actions/types'


const initialState = {
    posts: [],
    post: null,
    loading: true,
    isAuthenticated: false,
    error: {}
}
// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: payload,
                loading: false
            }
        case GET_POST:
            return {
                ...state,
                post: payload,
                loading: false
            }
        case ADD_POST:
            console.log(payload)
            return {
                isAuthenticated: true,
                ...state,
                posts: [...state.posts, payload],
                loading: false
            }
        case POST_ERROR:
            return {
                ...state,
            }
        case UPDATE_LIKES:
            return {
                ...state,
                posts: state.posts.map(post => post.id === payload.data.id ? post.likes = payload.data : post),
                loading: false
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== payload),
                loading: false
            }
        case ADD_COMMENT:
            
            return {
                ...state,
                   posts:[{
                       ...state.posts[0],
                       comments:[...state.posts[0].comments,payload]
                   }]
                
            }
        case REMOVE_COMMENT:
            return {
                ...state,
            }
        default:
            return state;



    }




}








